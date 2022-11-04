import React from "react";
import { Navbar } from "../components/Navbar";

export const DefaultLayout = (props) => {
  return (
    <>
      <Navbar token={props.token} setToken={props.setToken} />
      <main>
        <div>{props.children}</div>
      </main>
    </>
  );
};
