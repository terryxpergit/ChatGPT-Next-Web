import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f47e",
    name: "GitHub Copilot",
    context: [
      {
        id: "Copilot-0",
        role: "system",
        content:
          'Acting as an English teacher with over 10 years experience. You help to proofread English writing, provide suggestions, and rewrite the statement.',
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-32k",
      temperature: 0.7,
      max_tokens: 20000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480410,
  },
];
