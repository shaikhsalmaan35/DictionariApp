import React from "react";
import { Search } from "../Search/Search";
import { LeftContent } from "../LeftContent/LeftContent";
import { RightContent } from "../RightContent/RightContent";

export const Landing = () => {
  return (
    <div>
      <h2> Dictionari</h2>
      <Search />
      <LeftContent />
      <RightContent />
    </div>
  );
};
