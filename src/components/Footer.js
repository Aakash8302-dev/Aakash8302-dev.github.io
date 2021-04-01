import React from 'react'

const Footer = () => {

    const currentYear = () => {
        var year = new Date
        year = year.getFullYear()

        return year
    }

    return (
        <div id="footer">
            <a href="https://www.instagram.com/coding.atlas/" target="_blank" rel="noreferrer noopener">
                <span><i class="fab icon fa-instagram"></i></span>
            </a>
            <a href="https://github.com/Aakash8302-dev" target="_blank" rel="noreferrer noopener">
                <span><i class="fab icon fa-github"></i></span>
            </a>
            <a href="https://www.linkedin.com/in/aakash-arumugam-1626971b4" target="_blank" rel="noreferrer noopener">
                <span><i class="fab icon fa-linkedin-in"></i></span>
            </a>
            
            <div className="rights">
                AAKASH ARUMUGAM &#169; {currentYear()}
            </div>
        </div>

    )
}

export default Footer
