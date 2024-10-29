import { Fragment } from "react";
import Class from './searchbar.module.css'

const Searchbar = () => {

    return (
        <Fragment>
            <div className={Class.searchGrid}>
                <form className={Class.formSearch}>
                    <div className={Class.inputSec}>
                        <input placeholder="search item" type="search" name="search" id="search" />
                        <button type="button">search cocktails</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Searchbar