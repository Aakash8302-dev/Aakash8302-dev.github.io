import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <Link to="intro" offset={-185}>
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="about" offset={-185}>
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="work" offset={-185}>
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="contact" offset={-185}>
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar
