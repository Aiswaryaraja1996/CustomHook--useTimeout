import React, { useState } from "react";

export const ReadyContext = React.createContext();

export default function ReadyContextProvider({ children }) {
  //state management
  const [ready, setReady] = useState(false);

  //Context provider
  return (
    <ReadyContext.Provider value={[ready, setReady]}>
      {children}
    </ReadyContext.Provider>
  );
}
