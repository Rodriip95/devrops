import React from 'react'
import './footer.scss'

export default function Footer(){
    return(
        <div id="footer">
            <img src={"/assests/svg/wave4.svg"} alt="" />
            <div className="copy">
                <span>&copy; 2021 Devrops</span>
                <a href="https://www.instagram.com/devrops/" target="_blank">
                <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}