import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const texts = [
  "Hi, I'm Amit Roy",
  "Aspiring Data Analyst"
];

const TextChange = () => {

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {

    const interval = setInterval(() => {

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

    }, 120);

    return () => clearInterval(interval);

  }, [isForward]);



  useEffect(() => {

    setCurrentText(texts[index].substring(0, endValue));

    if (endValue === texts[index].length + 5) {
      setIsForward(false);
    }

    if (endValue === 0) {
      setIsForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
    }

  }, [endValue, index]);


    return (
 <span className="text-white inline-block min-w-[650px]">
    {currentText}
  </span>
  );
};

export default TextChange;