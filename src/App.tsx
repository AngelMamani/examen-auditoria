import { useEffect, useRef, useState } from "react";
import { questions } from "./data/questions";
import type { AnswerRecord, Letter, Question } from "./types";

const MIN_SECONDS = 5;
const MAX_SECONDS = 300;
const PRESETS = [10, 15, 20, 30, 45, 60];
const TILES = [
  { shape: "triangle", color: "#e21b3c" },
  { shape: "diamond", color: "#1368ce" },
  { shape: "circle", color: "#d89e00" },
  { shape: "square", color: "#26890c" },
] as const;

type Phase = "lobby" | "play" | "reveal" | "done";

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    copy[i] = copy[j];
    copy[j] = current;
  }
  return copy;
}

function clampSeconds(value: number) {
  if (!Number.isFinite(value)) return 30;
  return Math.min(MAX_SECONDS, Math.max(MIN_SECONDS, Math.round(value)));
}

function readStoredSeconds() {
  const saved = Number(localStorage.getItem("examen-segundos"));
  return clampSeconds(saved || 30);
}

function prepareDeck(mixQuestions: boolean): Question[] {
  const order = mixQuestions ? shuffle(questions) : [...questions];
  return order.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }));
}

function Shape({ name }: { name: (typeof TILES)[number]["shape"] }) {
  if (name === "triangle") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2.5 22.5 21.5h-21z" />
      </svg>
    );
  }
  if (name === "diamond") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 1.5 22.5 12 12 22.5 1.5 12z" />
      </svg>
    );
  }
  if (name === "circle") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const [phase, setPhase] = useState<Phase>("lobby");
  const [seconds, setSeconds] = useState(readStoredSeconds);
  const [mixQuestions, setMixQuestions] = useState(true);
  const [draftSeconds, setDraftSeconds] = useState(String(readStoredSeconds()));
  const [deck, setDeck] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(30);
  const [picked, setPicked] = useState<Letter | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const locked = useRef(false);
  const deckRef = useRef(deck);
  const indexRef = useRef(index);
  const remainingRef = useRef(remaining);
  deckRef.current = deck;
  indexRef.current = index;
  remainingRef.current = remaining;

  const current = deck[index];

  useEffect(() => {
    if (phase !== "play") return;
    locked.current = false;
    const totalMs = seconds * 1000;
    const endsAt = Date.now() + totalMs;
    setRemaining(seconds);
    remainingRef.current = seconds;

    const timer = window.setInterval(() => {
      const left = Math.max(0, (endsAt - Date.now()) / 1000);
      remainingRef.current = left;
      setRemaining(left);
      if (left > 0 || locked.current) return;
      locked.current = true;
      const question = deckRef.current[indexRef.current];
      setPicked(null);
      setAnswers((prev) => [
        ...prev,
        { questionId: question.id, picked: null, correct: false, points: 0 },
      ]);
      setPhase("reveal");
    }, 100);

    return () => window.clearInterval(timer);
  }, [phase, index, seconds]);

  function commitSeconds(value: number) {
    const next = clampSeconds(value);
    setSeconds(next);
    setDraftSeconds(String(next));
    localStorage.setItem("examen-segundos", String(next));
  }

  function start() {
    const time = clampSeconds(Number(draftSeconds));
    commitSeconds(time);
    setDeck(prepareDeck(mixQuestions));
    setIndex(0);
    setAnswers([]);
    setPicked(null);
    locked.current = false;
    setPhase("play");
  }

  function choose(letter: Letter) {
    if (phase !== "play" || locked.current || !current) return;
    locked.current = true;
    const correct = letter === current.correct;
    const ratio = remainingRef.current / seconds;
    const points = correct ? Math.max(0, Math.round(1000 * ratio)) : 0;
    setPicked(letter);
    setAnswers((prev) => [
      ...prev,
      { questionId: current.id, picked: letter, correct, points },
    ]);
    setPhase("reveal");
  }

  function next() {
    if (index + 1 >= deck.length) {
      setPhase("done");
      return;
    }
    setPicked(null);
    setIndex((value) => value + 1);
    setPhase("play");
  }

  const correctCount = answers.filter((answer) => answer.correct).length;
  const points = answers.reduce((sum, answer) => sum + answer.points, 0);

  return (
    <div className="app">
      {phase === "lobby" && (
        <section className="lobby">
          <p className="eyebrow">Auditoría de sistemas · Unidad 1</p>
          <h1>Simulacro de 50 preguntas</h1>
          <p className="lead">
            Datos personales, NTP-ISO/IEC 27001:2022, gobierno digital y delitos
            informáticos. Cada intento mezcla las alternativas.
          </p>

          <div className="setup">
            <label htmlFor="seconds">Segundos por pregunta</label>
            <div className="time-row">
              <button
                type="button"
                onClick={() => commitSeconds(seconds - 5)}
                aria-label="Quitar 5 segundos"
              >
                −
              </button>
              <input
                id="seconds"
                inputMode="numeric"
                value={draftSeconds}
                onChange={(event) => setDraftSeconds(event.target.value)}
                onBlur={() => commitSeconds(Number(draftSeconds))}
              />
              <button
                type="button"
                onClick={() => commitSeconds(seconds + 5)}
                aria-label="Sumar 5 segundos"
              >
                +
              </button>
            </div>
            <div className="presets">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={seconds === preset ? "preset active" : "preset"}
                  onClick={() => commitSeconds(preset)}
                >
                  {preset}s
                </button>
              ))}
            </div>
            <p className="hint">Puedes usar entre {MIN_SECONDS} y {MAX_SECONDS} segundos.</p>

            <label className="check">
              <input
                type="checkbox"
                checked={mixQuestions}
                onChange={(event) => setMixQuestions(event.target.checked)}
              />
              Mezclar también el orden de las preguntas
            </label>
          </div>

          <button type="button" className="start" onClick={start}>
            Empezar
          </button>
        </section>
      )}

      {(phase === "play" || phase === "reveal") && current && (
        <section className="play">
          <div className="play-head">
          <header className="topbar">
            <div>
              <p className="tema">{current.tema}</p>
              <p className="progress">
                {index + 1} / {deck.length} · Banco #{current.id}
              </p>
            </div>
            <div className="score-pill">
              {correctCount} correctas · {points} pts
            </div>
          </header>

          <div
            className="timer"
            role="timer"
            aria-label={`${Math.ceil(remaining)} segundos`}
          >
            <span>
              <i style={{ width: `${(remaining / seconds) * 100}%` }} />
            </span>
            <strong>{Math.ceil(remaining)}</strong>
          </div>
          </div>

          <h2 className="prompt">{current.prompt}</h2>

          <div className="answers">
            {current.options.map((option, optionIndex) => {
              const tile = TILES[optionIndex];
              const isCorrect = option.letter === current.correct;
              const isPicked = option.letter === picked;
              let state = "";
              if (phase === "reveal" && isCorrect) state = "is-correct";
              else if (phase === "reveal" && isPicked) state = "is-wrong";
              else if (phase === "reveal") state = "is-dim";

              return (
                <button
                  key={option.letter}
                  type="button"
                  className={`tile ${state}`}
                  style={{ background: tile.color }}
                  disabled={phase !== "play"}
                  onClick={() => choose(option.letter)}
                >
                  <span className="shape">
                    <Shape name={tile.shape} />
                  </span>
                  <span className="tile-text">{option.text}</span>
                </button>
              );
            })}
          </div>

          {phase === "reveal" && (
            <div className="feedback">
              <p className={picked && picked === current.correct ? "verdict ok" : "verdict bad"}>
                {picked === null
                  ? "Se acabó el tiempo"
                  : picked === current.correct
                    ? "Correcto"
                    : "Incorrecto"}
              </p>
              <p className="why">{current.whyCorrect}</p>
              {picked && picked !== current.correct && (
                <p className="why-wrong">{current.whyWrong[picked]}</p>
              )}
              <button type="button" className="next" onClick={next}>
                {index + 1 === deck.length ? "Ver resultado" : "Siguiente"}
              </button>
            </div>
          )}
        </section>
      )}

      {phase === "done" && (
        <section className="results">
          <p className="eyebrow">Resultado</p>
          <h1>
            {correctCount} / {questions.length}
          </h1>
          <p className="lead">
            {points} puntos. El puntaje baja si respondes tarde: una respuesta
            correcta al inicio vale hasta 1000.
          </p>
          <ul className="temas">
            {["Datos personales", "NTP-ISO/IEC 27001:2022", "Gobierno digital", "Delitos informáticos"].map(
              (tema) => {
                const ofTema = questions.filter((question) => question.tema === tema);
                const hits = ofTema.filter((question) =>
                  answers.some((answer) => answer.questionId === question.id && answer.correct),
                ).length;
                return (
                  <li key={tema}>
                    <span>{tema}</span>
                    <strong>
                      {hits}/{ofTema.length}
                    </strong>
                  </li>
                );
              },
            )}
          </ul>

          <div className="review">
            {answers.filter((answer) => !answer.correct).length === 0 ? (
              <p className="why">Las 50 respuestas fueron correctas.</p>
            ) : (
              answers
                .filter((answer) => !answer.correct)
                .map((answer) => {
                  const question = questions.find((item) => item.id === answer.questionId);
                  if (!question) return null;
                  const chosen = question.options.find((option) => option.letter === answer.picked);
                  const right = question.options.find((option) => option.letter === question.correct);
                  return (
                    <article key={question.id}>
                      <p className="tema">
                        {question.tema} · Banco #{question.id}
                      </p>
                      <h3>{question.prompt}</h3>
                      <p>
                        <strong>Tu respuesta: </strong>
                        {chosen?.text ?? "Tiempo agotado"}
                      </p>
                      <p>
                        <strong>Correcta: </strong>
                        {right?.text}
                      </p>
                      <p className="why">{question.whyCorrect}</p>
                    </article>
                  );
                })
            )}
          </div>

          <button type="button" className="start" onClick={() => setPhase("lobby")}>
            Volver a configurar
          </button>
        </section>
      )}
    </div>
  );
}
