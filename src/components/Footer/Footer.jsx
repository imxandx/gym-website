import React from 'react'
import './Footer.css'

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import MyLogo from '../../assets/BRANCO - Sem Fundo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <a href="https://github.com/imxandx" target='_blank' rel="noreferrer"><img src={Github} alt="" /></a>
                <a href="https://instagram.com/imxandx" target='_blank' rel="noreferrer"><img src={Instagram} alt="" /></a>
                <a href="https://linkedin.com/in/alexandre-delaboneta" target='_blank' rel="noreferrer"><img src={LinkedIn} alt="" /></a>
            </div>
            <div className="logo-f">
                <a href="https://imxandx.github.io/portfolio" target='_blank' rel="noreferrer"><img src={MyLogo} alt="" /></a>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer