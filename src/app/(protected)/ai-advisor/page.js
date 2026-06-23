import AiAdvisorChat from "@/components/AiAdvisorChat";

export default function AiAdvisorPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        AI Financial Advisor
      </h1>

      <p className="text-gray-600 mb-8">
        Ask questions about your
        goals, investments and
        financial planning.
      </p>

      <AiAdvisorChat />
    </div>
  );
}