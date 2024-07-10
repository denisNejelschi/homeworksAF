import { createContext, useState } from "react";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface IUserContext {
  user: IFormValues;
  setUser: React.Dispatch<React.SetStateAction<IFormValues>>;
}
interface IUserProviderProps {
  children: React.ReactNode;
}
const initialContext: IUserContext = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  setUser: () => {},
};
export const userContext = createContext<IUserContext>(initialContext);
export function UserProvider({ children }: IUserProviderProps) {
const[user,setUser]=useState({
    firstName: '',
  lastName: '',
  email: '',
})

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
        </userContext.Provider>
    </>
  );
}
