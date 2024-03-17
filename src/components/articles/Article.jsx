import React from "react";

export default function Article({ imgSrc, title, content, number }) {
  return (
    <div className="article">
      <img src={imgSrc} alt={"article image"} />
      <div>
        <h2>{number}</h2>
        <h3>
          <a href="">{title}</a>
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
