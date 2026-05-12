import { forwardRef } from "react";
import type { CSSProperties } from "react";

interface Props {
  code: string;
  className?: string;
  style?: CSSProperties;
}

const tokenClass = (name: string) => `code-token-${name || "x"}`;

const FakeCodeEditor = forwardRef<HTMLDivElement, Props>(({ code, className = "", style }, ref) => {
  const codeLines = code.split("\n");
  let currentClass = "x";

  return (
    <div
      ref={ref}
      style={style}
      className={`w-full max-w-180 rounded-[10px] bg-black p-3.75 font-mono text-white shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="mb-1.25" aria-hidden="true">
        <svg className="inline align-baseline" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5" />
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5" />
            <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5" />
          </g>
        </svg>
      </div>
      <div className="text-xs leading-[1.4] min-[730px]:text-sm" aria-label="Decorative Python code sample">
        {codeLines.map((line, lineIndex) => {
          const tokens = line.split("%");

          return (
            <pre className="whitespace-pre-wrap" key={lineIndex}>
              {tokens.map((token, tokenIndex) => {
                if (tokenIndex % 2 === 1) {
                  currentClass = token.trim();
                  return null;
                }

                return (
                  <span className={tokenClass(currentClass)} key={tokenIndex}>
                    {token}
                  </span>
                );
              })}
            </pre>
          );
        })}
      </div>
    </div>
  );
});

FakeCodeEditor.displayName = "FakeCodeEditor";

export default FakeCodeEditor;
