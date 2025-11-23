import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API Client
// Note: In a real production environment, ensure process.env.API_KEY is set.
// If the key is missing, the service handles the error gracefully in the UI.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getTravelAdvice = async (userQuestion: string): Promise<string> => {
  if (!apiKey) {
    return "API Keyが設定されていないため、AI機能を利用できません。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: `
          あなたはセブ島留学のベテランコンシェルジュです。
          ユーザーからのセブ島の観光、治安、デートスポット、英語学習に関する質問に、
          親しみやすく、かつプロフェッショナルなトーンで答えてください。
          
          回答のルール:
          1. 200文字以内で簡潔に答えること。
          2. 絵文字を適度に使ってフレンドリーにすること（🌊, 🥭, ✨など）。
          3. 「Cebu Romance English」という架空のサービスの宣伝をさりげなく入れること（「当校の先生となら...」など）。
        `,
      },
    });
    
    return response.text || "申し訳ありません。現在AIが応答できません。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "エラーが発生しました。しばらくしてから再度お試しください。";
  }
};