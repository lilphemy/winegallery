import React, { useState, createContext, ReactNode, useLayoutEffect, useCallback } from "react";


const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='




const options = {
    'method': 'GET',
}

type dataSet = {
    strAlcohollic: string,
    strDrinkThumb: string,
    strCategory: string,
    strDrink: string,
    strGlass: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
};


interface dataBucket {
    wineData: (dataSet)[],
    setWineData?: React.Dispatch<React.SetStateAction<(dataSet)[]>>;
}

// context provider
export const ResProvider = createContext<dataBucket>({
    wineData:[],
})


//function for search button



const ContextContainer = ({ children }: { children: ReactNode }) => {
   const searchKey = 'b'
    const [wineData, setWineData] = useState<(dataSet)[]>([])
    
    const getDrinks = useCallback( async (urlink: string) => {

        try{
            const fetchDrinks = await fetch(`${urlink}${searchKey}`, options)
            const data = await fetchDrinks.json()
            console.log(data.drinks)
            setWineData(data.drinks)
        }catch(err){
        }
    }, [searchKey])

    useLayoutEffect(() => {
        getDrinks(link)
    }, [searchKey, link])
    console.log(wineData)
    return (
        <ResProvider.Provider value={{wineData, setWineData}}>
            {children}
        </ResProvider.Provider>
    )
}

export default ContextContainer