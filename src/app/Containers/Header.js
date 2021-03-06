import React from 'react';
import { connect } from 'react-redux';

import TopBar from './Header Containers/TopBar.js';
import Search from './Header Containers/Search.js';
import FilmBody from './Header Containers/FilmBody.js';

const mapStateToProps = state => {
    return {
        film: state.filmBody.filmBodyToRender
    }
}

//High level header container.
const Header = (props) => {

    return (
        <header>
            <TopBar film={props.film} />
            <section className='header-contents'>
                {props.film ? <FilmBody film={props.film} /> : <Search /> }
            </section>
        </header>
    );
};

export default connect(mapStateToProps)(Header);