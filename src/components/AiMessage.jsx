export default function AiMessage({
  role,
  content,
}) {
  const isUser =
    role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-xl
          p-4
          rounded-xl
          ${
            isUser
              ? "bg-slate-900 text-white"
              : "bg-white border"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}