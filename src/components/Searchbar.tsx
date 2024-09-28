import React from "react";
import { SetSearchedLocation } from "../types";
import { useState } from "react";

interface SearchbarProps {
    setSearchedLocation: SetSearchedLocation;
  }




const  Searchbar: React.FC<SearchbarProps> = ({setSearchedLocation}) => {

    const [searchValue, setSearchValue] = React.useState("");
    const [toggleSearchbar, setToggleSearchbar] = useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        console.log(searchValue)
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setSearchedLocation(searchValue); 
  };

  const handleToggleSearchbar = () => {
    setToggleSearchbar((prevState) => !prevState); // Toggles the search bar visibility
  };

  console.log(setSearchedLocation)


    return (
        <nav className="navbar w-full h-10 flex justify-between px-16">
            <div className="logo">
                <a className=" font-semibold"
                href="#">
                    Pocket_Weather
                </a>
            </div>
            <form 
                className="searchbar w-1/3 flex justify-end  rounded-xl"
                onSubmit={handleFormSubmit}
                >
                    <div className="input-bar w-full h-full relative right-[-28px] overflow-x-hidden rounded-md">
                        <input 
                        className={toggleSearchbar ? 
                                "w-full relative outline-none right-[0px] bg-slate-200 rounded-3xl p-2 transition ease-in-out duration-300":
                                "p-2 translate-x-[200%] w-full relative outline-none right-[0px] bg-slate-200 rounded-3xl p-2 transition ease-in-out duration-300"
                            }
                        type="text" 
                        placeholder="Get the accurate weather data of your city"
                        onChange={handleChange}
                        name="searchedlocation"
                        value={searchValue}
                    />

                    </div>
                
            <button
              type="submit"
              className="fa-solid fa-magnifying-glass
                         relative  hover:cursor-pointer
                        bg-[#f2f2f2] p-3 rounded-[50%] transition ease-in-out duration-300
                        
                        "
              onClick={handleToggleSearchbar}
            ></button>
            </form>
        </nav>
    )
}

export default Searchbar;