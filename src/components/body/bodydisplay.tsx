import { useContext } from "react";
import { ResProvider } from "../../context/contextrule";
import Class from "./bodydisplay.module.css";

const BodyViews = function () {
  const { wineData } = useContext(ResProvider);

  return (
    <section className={Class.gridView}>
      {wineData.map((unitwine) => {
        const { strAlcoholic, strDrink, strGlass, strDrinkThumb } = unitwine;
        return (
          <div className={Class.divBlock}>
            <img src={strDrinkThumb} />
            <div className = {Class.divDesc}>
              <h1>{strDrink}</h1>
              <p className={Class.glassText}>{strGlass}</p>
              <p className={Class.categoText}>{strAlcoholic}</p>
              <button type="button">show more</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BodyViews;
