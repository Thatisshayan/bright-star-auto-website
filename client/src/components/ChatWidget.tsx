import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, MessageSquareText } from "lucide-react";
import { BUSINESS } from "@shared/const";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like a free estimate for my vehicle."
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: "WhatsApp",
      description: "Chat with us now",
      href: `https://wa.me/${BUSINESS.whatsappNumber}?text=${WHATSAPP_MESSAGE}`,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.99.582 3.845 1.588 5.401L2 22l4.735-1.556A9.953 9.953 0 0 0 12.001 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.2a8.174 8.174 0 0 1-4.166-1.14l-.299-.177-3.098 1.018 1.037-3.02-.194-.31A8.176 8.176 0 0 1 3.8 12c0-4.522 3.679-8.2 8.2-8.2s8.2 3.678 8.2 8.2-3.679 8.2-8.2 8.2z" />
        </svg>
      ),
      className: "bg-[#25D366] hover:bg-[#1ebe5a]",
    },
    {
      label: "Text Us",
      description: "+1 (416) 833-9252",
      href: `sms:${BUSINESS.smsNumber}`,
      external: false,
      icon: <MessageSquareText size={20} />,
      className: "bg-primary hover:bg-primary/90",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-2 mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {options.map(option => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 pl-4 pr-5 py-3 rounded-full text-white font-semibold shadow-lg transition-colors ${option.className}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {option.icon}
                <span className="text-sm">
                  {option.label}
                  <span className="block text-xs font-normal opacity-80">
                    {option.description}
                  </span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? "Close chat options" : "Open chat options"}
        aria-expanded={isOpen}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
