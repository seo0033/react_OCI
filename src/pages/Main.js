import React from 'react';
import MainVisual from '../component/MainVisual';
import MainBusiness from '../component/MainBusiness';
import About from '../component/About';
import News from '../component/News';
import '../css/Main.scss';

const Main = ({ content }) => {

    return (
        <main className='Main'>
            <MainVisual />
            <MainBusiness />
            <About />
            <News />
        </main>
    )
}

export default Main