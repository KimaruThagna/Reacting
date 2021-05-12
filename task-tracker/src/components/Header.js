import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("clicked")
    }

    return (
        <>
        <header className='header'>
            <h1>{title}</h1> 
            <Button color='green' text='add' onClick={onClick}/>
        </header>
        <p>We create a melting pot of issues to be solved by your dev team so that 
                you dont need to
            </p>

        </>
    )
}

Header.defaultProps = {
    title:'Default Issue Tracker Title'
}
export default Header
