import { useContext, Fragment } from "react";
import {ResProvider} from '../context/contextrule'



const BodyViews = function () {

    const {wineData} = useContext(ResProvider)

    return (
        <Fragment>
            {wineData.map((unitwine) => {
                return(
                    <Fragment>

                    </Fragment>
                )
            })}
        </Fragment>
    )
}

export default BodyViews