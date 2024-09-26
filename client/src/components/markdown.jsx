import React, { useState, useEffect } from "react";
import axios from "axios";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./styles.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const handleMarkdownChange = async (e) => {
    setMarkdown(e.target.value);
    try {
      const response = await axios.post("http://localhost:5000/convert", {
        markdown: e.target.value,
      });
      setHtml(response.data.html);
    } catch (err) {
      console.error("Error converting markdown:", err);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [markdown]);

  return (
    <div className="editor">
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Write Markdown here..."
        className="markdown-textarea"
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default MarkdownEditor;
