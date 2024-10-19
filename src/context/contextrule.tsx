import { useState, useEffect, createContext, ReactNode } from "react";


const link = 'https://broadway-wine.p.rapidapi.com/'

const options = {
    'method': 'GET',
    headers: {
        'x-rapidapi-key': '05e39e5af1msh568d42a782b9dacp1cc295jsnfba2c2b99283',
        'x-rapidapi-host': 'broadway-wine.p.rapidapi.com',
    }
}


const DataProvider = createContext([])

const ContextContainer = ({ children }: { children: ReactNode }) => {

    const [wineData, setWineData] = useState([])


    const datareach = async (urllink: string) => {
        try {
            const res = await fetch(urllink, options)
            const data = await res.json()
            console.log(data)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        datareach(link)
    }, [])

    return (
        <DataProvider.Provider value={wineData}>
            {children}
        </DataProvider.Provider>
    )
}

export default ContextContainer