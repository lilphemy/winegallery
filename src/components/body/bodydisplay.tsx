import { useContext } from "react";
import { ResProvider } from '../../context/contextrule'
import Class from './bodydisplay.module.css'


const BodyViews = function () {

    const { wineData } = useContext(ResProvider)

    return (
        <section className={Class.gridView}>
            {wineData.map((unitwine) => {
                const { strAlcoholic, strDrink, strGlass, strDrinkThumb } = unitwine
                return (
                    <div className={Class.divBlock}>
                        <div className={Class.imgStyle}>
                            <img src={strDrinkThumb} />
                        </div>
                        <h1>{strDrink}</h1>
                        <p>{strGlass}</p>
                        <p>{strAlcoholic}</p>
                        <button type="button">show more</button>
                    </div>
                )
            })}
        </section>
    )
}

export default BodyViews