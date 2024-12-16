import { createContext,useContext,useState  } from "react";

const Context=createContext();

function ContextProvider({children}){
  const userData=undefined;
  const [isAuth,setAuth]=useState(false);
  return <Context.Provider value={{user:userData,isAuth,funAuth:setAuth}}>{children}</Context.Provider>
}

function useUserContext(){
    const  useUser=useContext(Context);
    if(!useUser){
        console.error("Trying to Access outside of Block");
    }
    return useUser;
}
export {useUserContext,ContextProvider};