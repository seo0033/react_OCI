import React from 'react'

const Article01 = () => {
    return (
        <article className='Article article01'>
            <h2>기업 소개</h2>
            <figure>
                <img src={process.env.PUBLIC_URL + "/img/about.jpg"} alt="" />
            </figure>
            <div className="des">
                <p>
                    OCI는 1959년 설립한 한국의 대표적인 화학·에너지기업입니다. 베이직케미칼, 석유화학 및 카본소재, 에너지솔루션 부문 외 바이오, 도시개발 등 사업영역을 확대하며 전 세계 고객들의 니즈에 대응하고 있습니다.
                </p>
                <p>
                    OCI는 화학산업의 개척자에서 그린에너지 글로벌 리더로 향해갑니다.
                </p>
                <p>
                    OCI는 '글로벌 그린에너지·화학산업의 리더'라는 비전 아래, 기초화학 제품부터 태양광 발전, 바이오, 도시개발까지 다양한 사업 포트폴리오를 운영하며 전세계 고객에게 최적의 솔루션을 제공하고 있습니다.
                </p>
            </div>
        </article>
    )
}

export default Article01;