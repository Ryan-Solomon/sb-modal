import React, { Dispatch, SetStateAction, useContext } from 'react';
import { useState } from 'react';

type AppContextType = {
  show: boolean;
  setShow: () => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  const showModalHandler = () => setShow(!show);

  return (
    // @ts-ignore
    <AppContext.Provider value={{ show, setShow }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
