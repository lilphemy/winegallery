import {Fragment} from 'react'


const Heading = () => {

    return(
        <Fragment>
            <nav>
                <div>
                    <h2>Wine Gallary</h2>
                </div>
                <div>
                    <ul>
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