import { useState, createContext, ReactNode, useLayoutEffect, useCallback } from "react";


const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const options = {
    'method': 'GET',
}

interface dataBucket {
    wineData: ({strAlcoholic: string, strDrinkThumb: string, strCategory: string, strDrink: string, strGlass: string, strIngredient1?: string, strIngredient2?: string, strIngredient3?: string, strIngredient4?: string})[],
    //setWineData?: () => React.Dispatch<React.SetStateAction<never[]>
}

export const ResProvider = createContext<dataBucket>({
    wineData: [],
})

const ContextContainer = ({ children }: { children: ReactNode }) => {
   const searchKey = 'b'
    const [wineData, setWineData] = useState([])

    const getDrinks = useCallback( async (urlink: string) => {

        try{
            const fetchDrinks = await fetch(`${urlink}${searchKey}`, options)
            const data = await fetchDrinks.json()
            
            setWineData(data.drinks)
        }catch(err){
        }
    }, [searchKey])

    

    useLayoutEffect(() => {
        getDrinks(link)
    }, [searchKey, link])
    console.log(wineData)
    return (
        <ResProvider.Provider value={{wineData}}>
            {children}
        </ResProvider.Provider>
    )
}

export default ContextContainer