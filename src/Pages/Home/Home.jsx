import React from 'react'
import './Home.css'
import ProfilePic from '../../images/riyaz_profile.png'
import TitleMessage from './Title'
import Nav from "react-bootstrap/Nav";
import Particle from '../../Particle'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div id = "home">
           
           <section className = "home-section section ">
                <div className = "container">
                    <div className = "row full-screen ">
                        <div className = "home-text " style = {{color:"cyan"}}>
                            <h3>Hello</h3>
                            <h2>I'm Riyaz</h2>
                            <h1 className = "title"> <TitleMessage/></h1>.
                         
                            <Nav.Link href = "#about" style = {{textDecoration:"none"}}>
                            <div  className = "about-me-btn">
                            More About me
                            </div>
                            </Nav.Link>
                        </div>
                        <div className = "home-img ">
                            <div className = "img-box shadow">
                                <img src = {ProfilePic} alt = "profile-pic"/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
