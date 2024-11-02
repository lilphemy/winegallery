import React, { Fragment, useCallback, useContext, useState } from "react";
import Class from './searchbar.module.css'
import { ResProvider } from "../../context/contextrule";

const searchlink = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

const Searchbar = () => {
    const { searchKey, setSearchKey } = useContext(ResProvider)
    

    const handleSearch = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setSearchKey!("")
    }

    return (
        <Fragment>
            <div className={Class.searchGrid}>
                <form className={Class.formSearch}>
                    <div className={Class.inputSec}>
                        <input placeholder="search item" type="search" name="search" id="search" onChange={(e) => setSearchKey?.(e.target.value)} value={searchKey} />
                        <button onClick={handleSearch} type="button">search cocktails</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Searchbar