/** @jsxImportSource @emotion/react */
import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";

const SearchInputAnnimation: FC = () => {
  const targetText = "Takumasa Sugiyama Blog";
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const suggestions = [
    {
      "label": "Takumasa Sugiyama Blog Tech",
      "link": "/blog/tech"
    },
    {
      "label": "Takumasa Sugiyama Blog Life Style",
      "link": "/blog/life"
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
      }, 80); // タイピング速度
      return () => clearTimeout(timeout);
    }
  }, [input, isTyping, targetText]);

  useEffect(() => {
    if (input.length === targetText.length && isTyping) {
      setIsTyping(false);
    }
  }, [input, isTyping, targetText]);

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
            <a href={s.link} key={index} css={link}>
              <li css={suggestionItem}>
                {s.label}
              </li>
            </a>
          ))}
        </ul>
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