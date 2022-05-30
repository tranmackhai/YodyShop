import React from "react";
import { useParams } from "react-router-dom";
import typedata from "../../../typedata.json";
import TypePage from "../TypePage";

const SwitchPage = () => {
  const { slug } = useParams();
  function switchPage() {
    const data = typedata.find((item) => item.type === slug);
    if (data) {
      return <TypePage data={data} />;
    }
  }
  return <>{switchPage()}</>;
};

export default SwitchPage;
