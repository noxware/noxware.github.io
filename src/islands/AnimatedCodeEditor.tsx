import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FakeCodeEditor from "./FakeCodeEditor";

const RESIZE_TIMEOUT = 250;

function* createTextIterator(text: string) {
  let current = "";
  let className = false;

  for (const char of text) {
    if (char === "%") {
      className = !className;
      current += char;
    } else if (className) {
      current += char;
    } else {
      current += char;
      yield current;
    }
  }
}

interface Props {
  code: string;
  cursor: string;
  speed: number;
  className?: string;
}

export default function AnimatedCodeEditor({ code, cursor, speed, className = "" }: Props) {
  const [currentCode, setCurrentCode] = useState("");
  const [height, setHeight] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);
  const resizeTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const resizeHandler = () => {
      if (resizeTimeout.current) return;

      resizeTimeout.current = window.setTimeout(() => {
        resizeTimeout.current = undefined;
        setHeight(0);
      }, RESIZE_TIMEOUT);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.clearTimeout(resizeTimeout.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (!height && editorRef.current) {
      setHeight(editorRef.current.offsetHeight);
    }
  }, [height]);

  useEffect(() => {
    const textIterator = createTextIterator(code);
    let timeoutId: number | undefined;

    const animationHandler = () => {
      const nextCode = textIterator.next();

      if (!nextCode.done) {
        timeoutId = window.setTimeout(animationHandler, speed);
        setCurrentCode(`${nextCode.value}${cursor}`);
      }
    };

    timeoutId = window.setTimeout(animationHandler, speed);

    return () => window.clearTimeout(timeoutId);
  }, [code, cursor, speed]);

  return (
    <FakeCodeEditor
      ref={editorRef}
      className={className}
      code={height ? currentCode : code}
      style={height ? { height } : undefined}
    />
  );
}
