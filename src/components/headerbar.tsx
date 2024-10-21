import {Fragment} from 'react'


const Heading = () => {

    return(

        <Fragment>
            <nav className = 'bg-slat-500 flex flex-row w-full justify-between h-7'>
                <div>
                    <h2>Wine Gallary</h2>
                </div>
                <div>
                    <ul className = 'list-none flex flex-row'>
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