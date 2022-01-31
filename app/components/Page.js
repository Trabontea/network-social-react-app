import React, { useEffect } from "react";
import Container from "./Container.jsx";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | ComplexApp`;
    window.scrollTo(0, 0);
  }, []);

  return <Container wide={props.wide}>{props.children}</Container>;
};

export default Page;
