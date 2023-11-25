import { createContext, useState } from "react"


const dark_LanguageContext = createContext()




export  function UseDarkAndLangContext({children}) {
    const [dark, setDark] = useState("light")
    const [lang,setLang]=useState(localStorage.getItem("Language") || "en")

    localStorage.setItem("Language",lang)
    return (
        <dark_LanguageContext.Provider value={{dark,setDark,lang,setLang}}>
            {children}
        </dark_LanguageContext.Provider>
    )
}

export default dark_LanguageContext