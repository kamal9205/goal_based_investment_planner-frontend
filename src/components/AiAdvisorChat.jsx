"use client";

import { useState } from "react";

import { useAiAdvisor }
  from "@/hooks/useAiAdvisor";

import AiMessage
  from "./AiMessage";

import SuggestedQuestions
  from "./SuggestedQuestions";

export default function AiAdvisorChat() {
  const {
    messages,
    loading,
    sendMessage,
  } = useAiAdvisor();

  const [question, setQuestion] =
    useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (!question.trim())
        return;

      await sendMessage(
        question
      );

      setQuestion("");
    };

  return (
    <div className="space-y-6">
      <SuggestedQuestions
        onSelect={sendMessage}
      />

      <div className="space-y-4 min-h-[400px]">
        {messages.map(
          (message, index) => (
            <AiMessage
              key={index}
              role={message.role}
              content={
                message.content
              }
            />
          )
        )}

        {loading && (
          <div>
            AI Advisor is
            thinking...
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-3"
      >
        <input
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          placeholder="Ask about your financial goals..."
          className="
            flex-1
            border
            rounded-lg
            p-3
          "
        />

        <button
          className="
            bg-slate-900
            text-white
            px-6
            rounded-lg
          "
        >
          Send
        </button>
      </form>
    </div>
  );
}