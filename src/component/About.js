import React from 'react';


const About = () => {
    return (
        <section className='About sc'>
            <h2>About OCI</h2>
            <p>차별화된 고부가가치 미래기술 개발로 글로벌 그린에너지 화학산업의 새로운 표준을 만들어 갑니다.</p>
            <div className="AboutCon">
                <div className="inner">
                    <video controls loop autoplay="autoplay" muted="muted">
                        <source src={process.env.PUBLIC_URL + "/img/OCI_2022.mp4"} type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default About

