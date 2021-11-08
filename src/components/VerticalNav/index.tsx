import React from "react";

const VerticalNav = (): JSX.Element => {
  return (
    <div style={{ width: "30vw" }}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#works">Contact</a>
        </li>
        <li>
          <a href="#get-in-touch">About</a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav;
