import { useState, createContext, ReactNode, useLayoutEffect, useCallback } from "react";


const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchlink = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"


const options = {
    'method': 'GET',
}

interface dataBucket {
    wineData: ({strAlcoholic: string, strDrinkThumb: string, strCategory: string, strDrink: string, strGlass: string, strIngredient1?: string, strIngredient2?: string, strIngredient3?: string, strIngredient4?: string})[],
    fetchCocktail?: () => void;
    //setWineData?: () => React.Dispatch<React.SetStateAction<never[]>
}

export const ResProvider = createContext<dataBucket>({
    wineData: [],
})

//function for search button



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

    const fetchCocktail = useCallback(async (searchlink: string, id_name: string) => {
        try{
            const pullData = await fetch(`${searchlink} ${id_name}`)
            const data = await pullData.json()
            setWineData(data.drinks)
        }catch(err) {
            return err
        }
    }, [])

    


    useLayoutEffect(() => {
        getDrinks(link)
    }, [searchKey, link])
    console.log(wineData)
    return (
        <ResProvider.Provider value={{wineData, fetchCocktail}}>
            {children}
        </ResProvider.Provider>
    )
}

export default ContextContainer