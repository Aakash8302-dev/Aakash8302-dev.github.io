import React from 'react'
import {Link} from 'react-scroll'

const Intro = () => {
    return (
        <section className="intro" id="intro">
            <div className="title">
                Hi, <br /> I'm Aakash, <br/> web developer.
                <div>
                    <Link to="work" offset={-180}>
                        <button className="intro-btn" type="button">View my work</button>
                    </Link>    
                </div>
            </div>
        </section>
    )
}

export default Intro
