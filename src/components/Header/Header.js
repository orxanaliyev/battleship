import React, { useContext } from "react";
import { PlayfieldContext } from "../Playground/Playground";
import "./Header.css";

const Header = () => {
  const { greetingWords } = useContext(PlayfieldContext);
  const { title, description } = greetingWords;

  return (
    <h2 className={"ui Header header"}>
      <i className={"ship icon"}></i>
      <div className="content">
        {title}
        <div className={"sub header"}>{description}</div>
      </div>
      <div className={"ui divider"}></div>
    </h2>
  );
};

export default Header;
