import React from "react";

export default function nameAuth({ data }) {
  return (
    <div className="nameAuth">
      <strong>{data.authorName}</strong>
      <span>{data.authorId}</span>
    </div>
  );
}
