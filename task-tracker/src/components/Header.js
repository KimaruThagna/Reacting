import React from 'react'
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>We create a melting pot of issues to be solved by your dev team so that 
                you dont need to
            </p>
        </header>
    )
}

Header.defaultProps = {
    title:'Default Issue Tracker Title'
}
export default Header
