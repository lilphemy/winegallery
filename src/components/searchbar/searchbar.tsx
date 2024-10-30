import React, { Fragment, useCallback, useContext, useEffect, useState} from "react";
import Class from './searchbar.module.css'
import { ResProvider } from "../../context/contextrule";

const searchlink = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const Searchbar = () => {
    const {setWineData} = useContext(ResProvider)
    const [searchValue, setSearchValue] = useState<string>("")
    
    const fetchCocktail = useCallback(async (searchlink: string, id_name: string) => {
        try{
            const pullData = await fetch(`${searchlink} ${id_name}`, {method: "GET"})
            const data = await pullData.json()
            setWineData?.(data.drinks)
        }catch(err) {
            return err
        }
    }, [])

    const handleSearch = function (e: React.MouseEvent<HTMLButtonElement>  ) {
        e.preventDefault()
        useEffect(() => {
            fetchCocktail(searchlink, searchValue)
        }, [searchValue]);
        setSearchValue('')
    }

    return (
        <Fragment>
            <div className={Class.searchGrid}>
                <form className={Class.formSearch}>
                    <div className={Class.inputSec}>
                        <input placeholder="search item" type="search" name="search" id="search" onChange={(e) => setSearchValue(e.target.value)} value = {searchValue}/>
                        <button onClick={handleSearch} type="button">search cocktails</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Searchbar