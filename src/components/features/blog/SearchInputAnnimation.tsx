/** @jsxImportSource @emotion/react */
import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";

const SearchInputAnnimation: FC = () => {
  const targetText = "Takumasa Sugiyama Blog";
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const suggestions = [
    {
      "label": "Takumasa Sugiyama Blog Tech",
      "link": "https://dev.takumasasugiyama.com/"
    },
    {
      "label": "Takumasa Sugiyama Blog Life Style",
      "link": "/blog/life",
      "isComingSoon": true
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTyping && input.length < targetText.length) {
      const timeout = setTimeout(() => {
        setInput(targetText.slice(0, input.length + 1));
      }, 130); // タイピング速度
      return () => clearTimeout(timeout);
    }
  }, [input, isTyping, targetText]);

  useEffect(() => {
    if (input.length === targetText.length && isTyping) {
      setIsTyping(false);
    }
  }, [input, isTyping, targetText]);

  const handleSuggestionClick = (suggestion: typeof suggestions[0]) => {
    if (suggestion.isComingSoon) {
      setShowModal(true);
    } else {
      window.open(suggestion.link, '_blank');
    }
  };

  return (
    <div css={container}>
      <input
        css={inputStyle}
        type="text"
        value={input}
        readOnly
        placeholder="検索ワードを入力..."
      />
      {!isTyping && input.length === targetText.length && (
        <ul css={suggestionBox}>
          {suggestions.map((s, index) => (
            <div
              key={index}
              css={link}
              onClick={() => handleSuggestionClick(s)}
              role="button"
              tabIndex={0}
            >
              <li css={suggestionItem}>
                {s.label}
              </li>
            </div>
          ))}
        </ul>
      )}
      {showModal && (
        <div css={modalOverlay}>
          <div css={modalContent}>
            <h3>Coming Soon</h3>
            <p>The lifestyle blog is currently under construction.</p>
            <button css={modalButton} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInputAnnimation;

const container = css`
  width: 100%;
  height: 150px;
`;

const inputStyle = css`
  width: 50%;
  padding: 14px 20px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const suggestionBox = css`
  width: 50%;
  margin: 8px auto 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(60,64,67,.3);
  list-style: none;
  padding: 0;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px);}
    to { opacity: 1; transform: translateY(0);}
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const suggestionItem = css`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background: #f1f3f4;
  }
`;

const link = css`
  text-decoration: none;
  color: inherit;
`;

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const modalContent = css`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const modalButton = css`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #9a68ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #522ca0;
  }
`;