import { createContext, useState } from "react";

export const BodyContext = createContext([]);

export const BodyProvider = ({ children }) => {
  const [tab, setTab] = useState("fornecedores");

  const chooseTab = (pag) => {
    setTab(pag);
  };

  return (
    <BodyContext.Provider value={{ tab, chooseTab }}>
      {children}
    </BodyContext.Provider>
  );
};
