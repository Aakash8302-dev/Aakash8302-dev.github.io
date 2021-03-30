import React from 'react'

const Footer = () => {

    const currentYear = () => {
        var year = new Date
        year = year.getFullYear()

        return year
    }

    return (
        <div id="footer">
            <span><i class="fab icon fa-instagram"></i></span>
            <span><i class="fab icon fa-github"></i></span>
            <span><i class="fab icon fa-linkedin-in"></i></span>
            <div className="rights">
                AAKASH ARUMUGAM &#169; {currentYear()}
            </div>
        </div>

    )
}

export default Footer
