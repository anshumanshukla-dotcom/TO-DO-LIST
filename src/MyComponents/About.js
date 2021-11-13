import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "70vh",
        margin: "0px 15px",
        fontSize: '20px'
    }
    return (
        <div style={myStyle}>
            <h1 className="text-center my-3" style={{ color: 'blue' }}><u>About Us</u></h1>
            <br />
            <p>Welcome!<br />We are constantly working towards improving our services.<br /><br />Thanks for visiting.</p>
        </div>
    )
}
