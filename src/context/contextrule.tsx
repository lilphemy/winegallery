import { useState, createContext, ReactNode, useLayoutEffect } from "react";


const link = 'https://the-cocktail-db3.p.rapidapi.com/'

const options = {
    'method': 'GET',
    headers: {
		'x-rapidapi-key': '05e39e5af1msh568d42a782b9dacp1cc295jsnfba2c2b99283',
		'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
	}
}

interface dataBucket {
    wineData: ({id: string, title: string, difficulty: string, image: string})[],
    //setWineData?: () => React.Dispatch<React.SetStateAction<never[]>
}

export const ResProvider = createContext<dataBucket>({
    wineData: [],
})

const ContextContainer = ({ children }: { children: ReactNode }) => {

    const [wineData, setWineData] = useState([])

    const datareach = async (urllink: string) => {
        try {
            const res = await fetch(urllink, options)
            const data = await res.json()
            setWineData(data)
        }catch(err){
            console.log(err)
        }
    }

    useLayoutEffect(() => {
        //datareach(link)
    }, [link])

    return (
        <ResProvider.Provider value={{wineData}}>
            {children}
        </ResProvider.Provider>
    )
}

export default ContextContainer