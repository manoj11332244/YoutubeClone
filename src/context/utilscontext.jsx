import { useContext } from "react";
import { createContext, useState } from "react";

const Utilscontext=createContext();


export const UtilContextProvider =({childern})=>{
    const [isSiderBar,setIsSideBar]=useState(false)
    const [mobileShow,setMobileShow]=useState(false)
    return <Utilscontext.Provider value={{isSiderBar,setIsSideBar,mobileShow,setMobileShow}}>
        {childern}
    </Utilscontext.Provider>
}

export const useUtils= () =>{
    const utilsContext=useContext(Utilscontext)

    if(!utilsContext) return null;

    return utilsContext;
}