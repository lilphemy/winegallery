import {Fragment} from 'react'
import Class from './headerbar.module.css'


const Heading = () => {

    return(

        <Fragment>
            <nav className = {Class.mainHeader}>
                <div className = {Class.headTitle}>
                    <h2>Wine Gallary</h2>
                </div>
                <div className = {Class.headSections}>
                    <ul className = {Class.headUrls}>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>about</a>
                        </li>
                        <li>
                            <a>News letter</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}


export default Heading