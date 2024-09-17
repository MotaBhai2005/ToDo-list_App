import React from "react";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";


function Darkmode() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="px-6 pt-2">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <LuSun className="w-14 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                }
                {
                    !dark && <FiMoon className="w-14 h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                }
            </button>
        </div>
    );
}

export default Darkmode;