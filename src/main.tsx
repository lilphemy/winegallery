import {Component, StrictMode} from 'react'
import ReactDom from 'react-dom/client'
import Maindisplay from './App.tsx'



class ShowBody extends Component {


    render () {

        return(
            <StrictMode>
                <Maindisplay/>
            </StrictMode>
        )
    }
}

const root = ReactDom.createRoot(document.getElementById("root")!)

root.render(<ShowBody/>)