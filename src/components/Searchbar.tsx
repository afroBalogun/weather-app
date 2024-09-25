import React from "react";
import { SetSearchedLocation } from "../types";

interface SearchbarProps {
    setSearchedLocation: SetSearchedLocation;
  }



const  Searchbar: React.FC<SearchbarProps> = ({setSearchedLocation}) => {

    const [searchValue, setSearchValue] = React.useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    console.log(setSearchedLocation)
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setSearchedLocation(searchValue); 
  };

    return (
        <nav className="navbar w-full h-10 flex justify-end">
            <form 
                className="searchbar w-1/3"
                onSubmit={handleFormSubmit}
                >
                <input 
                    className="w-4/5 outline-none bg-slate-200 rounded-md"
                    type="text" 
                    placeholder="Get the accurate weather data of your city"
                    onChange={handleSearch}
                />

                <button type="submit">
                <i className="fa-solid fa-magnifying-glass relative right-5 hover:cursor-pointer "
                >
                
                </i>
                </button>
            </form>
        </nav>
    )
}

export default Searchbar;