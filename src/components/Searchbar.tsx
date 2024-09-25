import React from "react";

export default function Searchbar(){
    return (
        <nav className="navbar w-full h-10 flex justify-end">
            <form className="searchbar w-1/3">
                <input 
                    className="w-4/5 outline-none bg-slate-200 rounded-md"
                    type="text" 
                    placeholder="Search"
                />
                <i className="fa-solid fa-magnifying-glass relative right-5 hover:cursor-pointer ">
                
                </i>
            </form>
        </nav>
    )
}