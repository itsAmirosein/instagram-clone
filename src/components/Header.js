import React, { useState } from "react";
import * as sc from "../styles/header";
import * as fa from "react-icons/fa";

export default function Header() {
  const [value, setValue] = useState("");

  return (
    <sc.Header>
      <img src="./images/instagram.png" alt="logo" />
      <sc.Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
      <sc.Toolbar>
        <fa.FaHome />
        <fa.FaRegPaperPlane />
        <fa.FaRegCompass />
        <fa.FaRegHeart />
        <sc.Avatar />
      </sc.Toolbar>
    </sc.Header>
  );
}
