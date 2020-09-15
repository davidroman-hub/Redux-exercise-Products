import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>    
            <div className='container'>
                <h1><Link to='/' className='text-light'>
                    Crud - React, Redux, REST API & AXIOS
                    </Link></h1>
            </div>
            <Link 
                className='btn btn-danger nuevo-post d-block d=md-inlinke-block'
                to='/products/news'>Add Products</Link>
        </nav>
    )
}

export default Header