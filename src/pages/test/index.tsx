import React, {useState} from 'react';
import {css} from "@linaria/core";

const PageRouter = () => {
  const [count, setCount] = useState(0);
  const wrapper = css`
    display: flex;
    gap: 0 50px;
    padding: 10px;
  `;

  return (
    <div className={wrapper}>
      <div>이곳은 PageRouter</div>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};

export default PageRouter;