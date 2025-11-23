import React, { useState } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！セブ島のことは何でも聞いてくださいね🌴' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const reply = await getTravelAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setIsLoading(false);
  };

  return (
    <section className="py-12 bg-indigo-50 border-y border-indigo-100 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>
       <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
          <Bot className="text-indigo-600 mr-2" />
          <span className="font-bold text-gray-700">AIトラベルアシスタント</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          セブ島について不安なことはありますか？
        </h2>
        <p className="text-gray-600 mb-8">
          治安や持ち物、おすすめのカフェなど、Gemini AIが24時間いつでもお答えします。
        </p>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center mx-auto gap-2"
        >
          <Bot size={20} />
          AIに質問してみる
        </button>
      </div>

      {/* Modal Chat Interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Cebu AI Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 p-1 rounded-full transition">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-indigo-500" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例: セブ島の治安は大丈夫？"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AiAdvisor;