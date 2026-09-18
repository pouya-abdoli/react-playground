import { createContext, useContext } from "react";

export const newContext = createContext();
export const useAppData = () => useContext(newContext)

