import React from 'react'

const Footer = ({ content }) => {
    return (
        <footer className='Footer'>
            <div className="inner">
                <div className="Ft_Con">
                    <ul className='top'>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>영상정보처리기기 운영·관리 방침</li>
                        <li>이메일주소무단수집거부</li>
                        <li>OCI 기업시민보고서</li>
                    </ul>
                    <ul className='bottom'>
                        <li><address>주소 : {content.address}</address></li>
                        <li>사업자등록번호 : {content.number}</li>
                        <li>Tel : {content.tel}</li>
                        <li>e-mail : {content.email}</li>
                        <li>&copy; {content.name} All Rights Reserved.</li>
                    </ul>
                </div>
                <figure>
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt={content.name} />
                </figure>
            </div>
        </footer>
    )
}

export default Footer