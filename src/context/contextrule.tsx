import React, { useState, createContext, ReactNode, useLayoutEffect, useCallback } from "react";

const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const options = {
    'method': 'GET',
}

type dataSet = {
    strAlcoholic: string,
    strDrinkThumb: string,
    strCategory: string,
    strDrink: string,
    strGlass: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    idDrink: string,
};


interface dataBucket {
    wineData: (dataSet)[],
    setWineData?: React.Dispatch<React.SetStateAction<(dataSet)[]>>;
    setSearchKey?: React.Dispatch<React.SetStateAction<string>>
    searchKey?: string;
}

// context provider
export const ResProvider = createContext<dataBucket>({
    wineData:[],
})


//function for search button



const ContextContainer = ({ children }: { children: ReactNode }) => {
   const [searchKey, setSearchKey] = useState("f")
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

    return (
        <ResProvider.Provider value={{wineData, setWineData,searchKey, setSearchKey}}>
            {children}
        </ResProvider.Provider>
    )
}

export default ContextContainer
