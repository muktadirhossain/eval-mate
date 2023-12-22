import React from "react";

const MCQOptions = ({ option }) => {
  return (
    <div>
      <input type="checkbox" id={`${option}`} name="answer" value={`${option}`} />
      <label for={`${option}`}>{option}</label>
    </div>
  );
};

export default MCQOptions;
