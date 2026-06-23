import { useState } from "react";

import {
  askAdvisor,
} from "@/services/aiService";

export const useAiAdvisor =
  () => {
    const [messages, setMessages] =
      useState([]);

    const [loading, setLoading] =
      useState(false);

    const sendMessage =
      async (question) => {
        try {
          setLoading(true);

          setMessages((prev) => [
            ...prev,
            {
              role: "user",
              content: question,
            },
          ]);

          const response =
            await askAdvisor(
              question
            );

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                response.answer,
            },
          ]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    return {
      messages,
      loading,
      sendMessage,
    };
  };