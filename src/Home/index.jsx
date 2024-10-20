import React, { useState } from "react";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import storybookLogo from "../assets/storybook.svg";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="src/Home/index.jsx" target="_blank">
          <img src={storybookLogo} className="logo story" alt="Story logo" />
        </a>
      </div>
      <h1>Vite + React + Story</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
