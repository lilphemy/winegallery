import {Component} from 'react'
import ContextContainer from '../context/contextrule'
import Heading from './headerbar'
import Searchbar from './searchbar'


class HomeSegment extends Component {

    render () {

        return (
            <ContextContainer>
                <Heading/>
                <Searchbar/>
            </ContextContainer>
        )
    }
}

export default HomeSegment