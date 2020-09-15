import React from 'react'

const Header = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>    
            <div className='container'>
                <h1>Crud - React, Redux, REST API & AXIOS</h1>
            </div>
            <a 
            className='btn btn-danger nuevo-post d-block d=md-inlinke-block'
            href='productos/nuevos'>Add Products &#43; </a>
        </nav>
    )
}

export default Header