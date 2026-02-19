import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hello! I'm your design assistant from The Viraj. How can I help you transform your space today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-pro-preview";
      
      const systemInstruction = `You are a helpful, sophisticated, and professional interior design assistant for "The Viraj", a premium interior design company. 
      
      About The Viraj:
      - We believe great design is about how a space feels, not just looks.
      - Services: Full Interior Design, Modular Kitchens, Living Spaces, Renovation, Estimation.
      - Key Differentiators: Personalized designs (no templates), transparent pricing, premium materials (Hettich, Hafele, Greenply), end-to-end execution.
      - Tone: Elegant, professional, warm, and inspiring.
      
      Your Goal:
      - Answer questions about interior design trends, The Viraj's services, and general home improvement.
      - Encourage users to book a consultation or get an estimate.
      - Be concise but helpful.
      
      If asked about pricing, explain that we offer transparent estimation services and it depends on the scope, but we can work with various budgets.
      If asked for contact info, provide: hello@theviraj.com or the contact form on the website.
      `;

      // Construct history for context
      // Note: For simple stateless calls we can just send the prompt with context, 
      // but for a chat experience, we should ideally use chat.sendMessage. 
      // However, to keep it simple and robust in this snippet without managing full chat session object persistence across re-renders effectively without a context provider, 
      // we will use generateContent with the history included in the prompt or use the chat API if we can keep the session.
      // Let's use a fresh chat session for each turn for simplicity in this demo, or better, just append history to prompt.
      // Actually, let's try to use the chat API correctly.
      
      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: systemInstruction,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our team directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-[#141414] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-black">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">The Viraj Assistant</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">AI Powered Design Help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-accent)] text-black rounded-tr-none' 
                        : 'bg-[#252525] text-white rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#252525] p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="animate-spin text-[var(--color-accent)]" size={16} />
                    <span className="text-xs text-[var(--color-text-muted)]">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-[#1a1a1a]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about interiors..."
                  className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[var(--color-accent)] text-black p-2 rounded-xl hover:bg-[#e0e0d0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--color-accent)] rounded-full shadow-lg flex items-center justify-center text-black z-50 hover:bg-[#e0e0d0] transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
