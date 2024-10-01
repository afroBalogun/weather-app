import React from "react";
import { SetSearchedLocation } from "../types";
import { useState } from "react";

interface SearchbarProps {
    setSearchedLocation: SetSearchedLocation;
    setF_Temperature: React.Dispatch<React.SetStateAction<boolean>>
    F_Temperature : boolean
  }


const  Searchbar: React.FC<SearchbarProps> = ({setSearchedLocation, setF_Temperature, F_Temperature}) => {

    const [searchValue, setSearchValue] = React.useState("");
    const [toggleSearchbar, setToggleSearchbar] = useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        console.log(searchValue)
  };

    function convertToCelcius(){
      setF_Temperature(false)
    }

    function convertToFarenheit(){
      setF_Temperature(true)
    }



  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setSearchedLocation(searchValue); 
  };

  const handleToggleSearchbar = () => {
    setToggleSearchbar((prevState) => !prevState); // Toggles the search bar visibility
  };



    return (
        <nav className="navbar w-full h-10 flex justify-between items-center ">
            <div className="logo hover:border-b-2 border-blue-950 p-2 text-xs
              sm:text-sm
              md:text-base
              xl:text-xl
            ">
                <a className=" font-semibold flex items-center"
                href="#">
                  <div className="icon grid grid-cols-2 gap-1 text-cyan-950">
                    <i className="fa-solid fa-cloud"></i>
                    <i className="fa-solid fa-sun"></i>
                    <i className="fa-solid fa-bolt"></i>
                    <i className="fa-solid fa-snowflake"></i>
                  </div>
                    Pocket_Weather
                </a>
            </div>


            <div className="temp flex items-center text-xs
              sm:text-sm
              md:text-base
              xl:text-lg
 ">
                <p className={`c p-2 flex items-center  hover:cursor-pointer text-based ${!F_Temperature && "font-extrabold border-b-2 border-cyan-900"}`}
                  onClick={convertToCelcius}
                >
                  <sup className="text-[8px]">o</sup>
                    C
                </p>

                <p className="text-xl p-1">
                  |
                </p>

                <p className={`f p-2 flex items-center hover:cursor-pointer text-based ${F_Temperature && "font-extrabold border-b-2 border-cyan-900"}`}
                  onClick={convertToFarenheit}
                >
                  <sup className="text-[8px]">o</sup>
                  F
                </p>
            </div>


            <form 
                className="searchbar w-[40%] flex justify-end  rounded-xl text-xs
                  sm:text-sm
                  md:text-base
                  xl:text-lg
                "
                onSubmit={handleFormSubmit}
                >
                    <div className="input-bar w-full h-full relative right-[-28px] overflow-x-hidden rounded-md">
                        <input 
                        className={toggleSearchbar ? 
                                "w-full relative outline-none right-[0px] bg-slate-200 rounded-3xl p-2 transition ease-in-out duration-300":
                                "translate-x-[200%] w-full relative outline-none right-[0px] bg-slate-200 rounded-3xl p-2 transition ease-in-out duration-300"
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