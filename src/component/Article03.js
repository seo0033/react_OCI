import React from 'react'
const MANAGEMENT = [
    { id: 1, tit: "ESG경영", des: "지속가능한 가치 창출을 위해 ESG중심경영을 선도하고 있습니다." },
    { id: 2, tit: "사회공헌", des: "사회적 가치를 창출하여 사회에 긍정적인 영향력을 전달하고 있습니다." },
    { id: 3, tit: "윤리경영", des: "투명, 윤리, 인권 존중 문화를 바탕으로 이해관계자들과 소통하고 협력합니다." },
    { id: 4, tit: "안전경영", des: "안전을 최우선하여 사업장을 운영하고, 성숙한 안전문화를 만드는데 앞장서고 있습니다." },
    { id: 5, tit: "환경경영", des: "기후 변화에 선제적으로 대응하기 위해 친환경 경영과 전략을 펼치며 사회적 책임을 다하고 있습니다." },
]
const Article03 = () => {
    return (
        <article className='Article article03'>
            <h2>지속가능경영</h2>
            <div className="management">
                {
                    MANAGEMENT.map((it, idx) => {
                        return (
                            <figure>
                                <span>0{it.id}</span>
                                <h3>{it.tit}</h3>
                                <p>{it.des}</p>
                            </figure>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default Article03;