import {Component} from 'react'
import ContextContainer from '../context/contextrule'
import Heading from './header/headerbar.tsx'
import Searchbar from './searchbar/searchbar.tsx'
import BodyView from './body/bodydisplay.tsx'


class HomeSegment extends Component {

    render () {

        return (
            <ContextContainer>
                <Heading/>
                <Searchbar/>
                <BodyView/>
            </ContextContainer>
        )
    }
}

export default HomeSegment