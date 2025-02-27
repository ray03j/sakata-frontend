
import { createContext, useContext, useState, ReactNode } from "react";

type UserNameContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const UserNameContext = createContext<UserNameContextType | undefined>(undefined); // ✅ export 追加

export const UserNameProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};


export const useUserName = () => {
  const context = useContext(UserNameContext);
  if (!context) throw new Error("useUserName must be used within a UserNameProvider");
  return context;
};

