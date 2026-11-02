import React from "react";

const Navbar = ({ theme,logo = "React Todo",changeTheme }) => {


    return (
        <nav className={theme ? "bg-black px-8 py-2 flex items-center justify-between" : " flex items-center justify-between bg-blue-900 py-2 px-8"}>
            <h1 className="text-white font-bold">{logo}</h1>
             <button onClick={() => changeTheme()} className="bg-blue-500 px-2 py-1 rounded-md text-sm font-bold text-white cursor-pointer hover:bg-blue-800">Switch Theme</button>

        </nav>
    )
}

export default Navbar