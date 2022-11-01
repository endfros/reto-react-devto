import React from "react";
import { Navbar } from "../components/Navbar";

export const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />;
      <main>
        <div>{props.children}</div>
      </main>
    </>
  );
};
