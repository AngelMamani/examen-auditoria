import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync(
  new URL("../../SIMULACRO_50_PREGUNTAS_UNIDAD_1.md", import.meta.url),
  "utf8",
);

const body = source.split("## Clave rápida")[0];
const chunks = body.split(/^### Pregunta /m).slice(1);

const questions = chunks.map((chunk) => {
  const lines = chunk.replace(/\r\n/g, "\n").split("\n");
  const id = Number(lines[0].trim());
  const rest = lines.slice(1);

  let tema = "Unidad 1";
  if (id <= 13) tema = "Datos personales";
  else if (id <= 26) tema = "NTP-ISO/IEC 27001:2022";
  else if (id <= 36) tema = "Gobierno digital";
  else tema = "Delitos informáticos";

  const optionStart = rest.findIndex((line) => /^- [A-D]\) /.test(line));
  const prompt = rest
    .slice(0, optionStart)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\*([^*]+)\*/g, "$1");

  const options = [];
  for (const line of rest) {
    const match = line.match(/^- ([A-D])\) (.+)$/);
    if (match) options.push({ letter: match[1], text: match[2].trim() });
  }

  const correctLine = rest.find((line) => line.includes("Respuesta correcta"));
  const correct = correctLine?.match(/([A-D])\s*$/)?.[1];

  const whyIndex = rest.findIndex((line) => line.includes("Por qué es correcta"));
  const whyCorrect = rest[whyIndex]?.replace(/^\*\*Por qué es correcta:\*\*\s*/, "").trim() ?? "";

  const whyWrong = {};
  for (const line of rest) {
    const match = line.match(/^- \*\*([A-D]):\*\*\s*(.+)$/);
    if (match) whyWrong[match[1]] = match[2].trim();
  }

  return { id, tema, prompt, options, correct, whyCorrect, whyWrong };
});

if (questions.length !== 50) {
  throw new Error(`Se esperaban 50 preguntas y se leyeron ${questions.length}`);
}

for (const question of questions) {
  if (question.options.length !== 4) {
    throw new Error(`La pregunta ${question.id} no tiene 4 alternativas`);
  }
  if (!question.correct || !question.options.some((option) => option.letter === question.correct)) {
    throw new Error(`La pregunta ${question.id} no tiene respuesta válida`);
  }
  if (!question.prompt || !question.whyCorrect) {
    throw new Error(`La pregunta ${question.id} está incompleta`);
  }
  for (const option of question.options) {
    if (option.letter !== question.correct && !question.whyWrong[option.letter]) {
      throw new Error(`La pregunta ${question.id} no explica la alternativa ${option.letter}`);
    }
  }
}

const file = `import type { Question } from '../types'

export const questions: Question[] = ${JSON.stringify(questions, null, 2)}
`;

writeFileSync(new URL("../src/data/questions.ts", import.meta.url), file);
console.log(`OK ${questions.length} preguntas`);
