"use client";
import React, { Suspense, lazy, useEffect, useState } from "react";

const MarkdownRenderer = lazy(() => import("./MarkDownRenderer"));

function NewsPage({ headline, source, date, content }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "20px",
        margin: "20px",
        borderRadius: "5px",
      }}
    >
      <h1>{headline}</h1>
      <p>
        <strong>Source:</strong> {source} | <strong>Date:</strong> {date}
      </p>
      <hr />
      {isClient ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MarkdownRenderer markdownText={content} />
        </Suspense>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewsPage;
