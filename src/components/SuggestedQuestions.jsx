export default function SuggestedQuestions({
  onSelect,
}) {
  const questions = [
    "Can I buy a house in 8 years?",
    "Am I saving enough?",
    "How can I improve my investment score?",
    "Which goal should I prioritize?",
    "Should I increase my SIP?",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map(
        (question) => (
          <button
            key={question}
            onClick={() =>
              onSelect(question)
            }
            className="
              border
              rounded-full
              px-4
              py-2
              text-sm
              hover:bg-slate-100
            "
          >
            {question}
          </button>
        )
      )}
    </div>
  );
}