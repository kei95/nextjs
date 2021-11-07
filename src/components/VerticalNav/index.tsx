import React from "react";

interface indexProps {}

const VerticalNav: React.FC<indexProps> = () => {
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
