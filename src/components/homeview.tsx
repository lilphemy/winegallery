import {Component} from 'react'
import Heading from './headerbar'
import ContextContainer from '../context/contextrule'


class HomeSegment extends Component {

    render () {

        return (
            <ContextContainer>
                <Heading/>
            </ContextContainer>
        )
    }
}

export default HomeSegment