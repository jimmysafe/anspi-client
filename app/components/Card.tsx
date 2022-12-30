import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <article className="bg-white border border-gray-300 border-solid rounded-lg p-6">
      {/* Title */}
      <p className="font-bold text-black text-2xl">{title}</p>
      {/* Content */}
      {children}
    </article>
  );
};

export default Card;
