import { createContext, useEffect, useState } from "react";

export const CtxParrilla = createContext({});
export const AppStore = (props) => {
  const [data, setData] = useState([]);
  const [loadFeach, setLoadFeach] = useState(false);
  const [errorFeach, setErrorFeach] = useState(false);

  useEffect(() => {}, []);

  return (
    <CtxParrilla.Provider
      value={{
        data,
        loadFeach,
        errorFeach
      }}
    >
      {props.children}
    </CtxParrilla.Provider>
  );
};
