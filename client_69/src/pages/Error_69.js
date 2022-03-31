import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Error_69'
import img from '../assets/images/not-found.svg'
const Error_69 = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not found' />
                <h3>OHH! PAGE NOT FOUND</h3>
                <p>We cant seem to find the page you've look for</p>
                <Link to="/">back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error_69
