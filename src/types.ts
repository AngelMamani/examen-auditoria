export type Letter = "A" | "B" | "C" | "D";

export type Option = {
  letter: Letter;
  text: string;
};

export type Question = {
  id: number;
  tema: string;
  prompt: string;
  options: Option[];
  correct: Letter;
  whyCorrect: string;
  whyWrong: Partial<Record<Letter, string>>;
};

export type AnswerRecord = {
  questionId: number;
  picked: Letter | null;
  correct: boolean;
  points: number;
};
