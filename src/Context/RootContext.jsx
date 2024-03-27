import { createContext, useState } from "react";

export const LanguageCantext = createContext()



const RootContext = (children) => {
    const [Language,setLanguage]=useState()
    return (
        <LanguageCantext.Provider   value={{
          Language,
          setLanguage
        }}>
            {children   }
            
        </LanguageCantext.Provider>
    );
};

export default RootContext;