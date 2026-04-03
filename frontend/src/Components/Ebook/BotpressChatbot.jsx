import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getStoredSession } from "../../api/authService";
import {
  buildAssistantReply,
  createWelcomeMessage,
} from "../../data/assistantKnowledge";

export default function ByteBridgeAssistant() {
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(() => [
    createWelcomeMessage(getStoredSession()),
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  const pushAssistantReply = (prompt) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsTyping(true);

    timeoutRef.current = window.setTimeout(() => {
      const reply = buildAssistantReply(prompt, {
        pathname: location.pathname,
        session: getStoredSession(),
      });

      setMessages((currentMessages) => [...currentMessages, reply]);
      setIsTyping(false);
    }, 420);
  };

  const sendPrompt = (prompt) => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isTyping) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmedPrompt,
      },
    ]);

    setInputValue("");
    if (!isOpen) {
      setIsOpen(true);
    }

    pushAssistantReply(trimmedPrompt);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPrompt(inputValue);
  };

  const handleAction = (action) => {
    if (action.type === "route") {
      navigate(action.to);
      setIsOpen(false);
      return;
    }

    if (action.type === "link") {
      window.open(action.href, "_blank", "noopener,noreferrer");
      return;
    }

    if (action.type === "prompt") {
      sendPrompt(action.prompt);
    }
  };

  const resetConversation = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsTyping(false);
    setInputValue("");
    setMessages([createWelcomeMessage(getStoredSession())]);
  };

  return (
    <div className="assistant-shell">
      <button
        type="button"
        className={`assistant-fab${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close ByteBridge assistant" : "Open ByteBridge assistant"}
      >
        <span className="assistant-fab__pulse"></span>
        <img
          src="/img/bytebridge-bot-symbol.svg"
          alt=""
          className="assistant-fab__icon"
        />
      </button>

      <section className={`assistant-panel${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        <header className="assistant-panel__header">
          <div className="assistant-panel__identity">
            <span className="assistant-panel__mark">
              <img
                src="/img/bytebridge-bot-symbol.svg"
                alt=""
                className="assistant-panel__mark-icon"
              />
            </span>
            <div>
              <strong>ByteBridge Assistant</strong>
              <span>Free site guide for courses, quizzes, mentors, and support</span>
            </div>
          </div>

          <div className="assistant-panel__controls">
            <button type="button" onClick={resetConversation} aria-label="Reset conversation">
              <i className="fas fa-redo-alt"></i>
            </button>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </header>

        <div className="assistant-panel__messages">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`assistant-message assistant-message--${message.role}`}
            >
              <div className="assistant-message__bubble">
                <p>{message.text}</p>
              </div>

              {message.actions?.length ? (
                <div className="assistant-message__actions">
                  {message.actions.map((action) => (
                    <button
                      key={`${message.id}-${action.label}`}
                      type="button"
                      className="assistant-action"
                      onClick={() => handleAction(action)}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {message.suggestions?.length ? (
                <div className="assistant-message__suggestions">
                  {message.suggestions.map((suggestion) => (
                    <button
                      key={`${message.id}-${suggestion}`}
                      type="button"
                      className="assistant-suggestion"
                      onClick={() => sendPrompt(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          {isTyping ? (
            <div className="assistant-message assistant-message--assistant">
              <div className="assistant-message__bubble assistant-message__bubble--typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}

          <div ref={messagesEndRef}></div>
        </div>

        <form className="assistant-panel__composer" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Ask about DSA, courses, assessments, contact, mentors..."
            aria-label="Ask ByteBridge assistant"
          />
          <button type="submit" disabled={!inputValue.trim() || isTyping}>
            Ask
          </button>
        </form>
      </section>
    </div>
  );
}
