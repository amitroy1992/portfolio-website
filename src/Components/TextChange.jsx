import { useState, useEffect } from "react";

const texts = [
  "Hi, I'm Amit Roy",
  "Aspiring Data Analyst"
];

const TextChange = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (subIndex < currentText.length) {
          setSubIndex(subIndex + 1);
        } else {
          // pause before delete
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        // deleting
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <span className="text-white inline-block min-w-[250px] md:min-w-[650px]">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export default TextChange;