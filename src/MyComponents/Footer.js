import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "10vh",
        width: "100%",
        border: "2px solid red"
    }

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center" style={{ paddingTop: '16px' }}>
                Copyright &copy; 2020-2021 ToDoList.com
            </p>
        </footer>
    )
}
