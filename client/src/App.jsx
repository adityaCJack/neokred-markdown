import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MarkdownEditor from "./components/markdown";

function App() {
  return (
    <>
      <center>
        <h4 style={{ color: "#757575" }}>Basic Markdown Editor for Neokred</h4>
      </center>
      <MarkdownEditor />
    </>
  );
}

export default App;
