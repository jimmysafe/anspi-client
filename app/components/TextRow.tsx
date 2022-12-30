import React from "react";

type TextRowProps = {
  label: string;
  value: string | number;
};

const TextRow = ({ label, value }: TextRowProps) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-gray-300">{label}</p>
      <p className="text-black">{value}</p>
    </div>
  );
};

export default TextRow;
