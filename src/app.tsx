import {Component} from 'react'
import ContextContainer from './context/contextrule'
import HomeSegment from './components/homeview'



class Maindisplay extends Component {


    render() {

        return (
            <ContextContainer>
                <HomeSegment />
            </ContextContainer>
        )
    }
}

export default Maindisplay