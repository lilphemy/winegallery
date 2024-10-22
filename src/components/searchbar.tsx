import { useState, Fragment } from "react";


const Searchbar = () => {

    return(
        <Fragment>
            <div className = 'w-100% bg-yellow-400'>
                <form>
                    <input placeholder = "search item" type="search" name="search" id="search" />
                    <button type="button">search cocktails</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Searchbar