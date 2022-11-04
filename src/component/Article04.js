import React from 'react'
const NOTICE = [
    { num: "01", tit: "2022년 3분기 실적발표회 개최 안내", date: "2022.10.12", view: "117" },
    { num: "02", tit: "2018년 3분기 실적발표 컨퍼런스콜 개최 안내", date: "2022.10.02", view: "85" },
    { num: "03", tit: "제 46기 정기주주총회 소집공고", date: "2022.09.30", view: "291" },
    { num: "04", tit: "	2019년 3분기 실적발표 컨퍼런스콜 개최 안내", date: "2022.09.22", view: "32" },
    { num: "05", tit: "2019년 2분기 실적발표회 개최 안내", date: "2022.09.01", view: "54" },
    { num: "06", tit: "	군산 폴리실리콘 공장 가스 누출 사고 브리핑", date: "2022.08.26", view: "135" },
]

const Article04 = () => {
    return (
        <article className='Article article04'>
            <h2>공지사항</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        NOTICE.map((it, idx) => {
                            return (
                                <tr>
                                    <td className='num'>{it.num}</td>
                                    <td>{it.tit}</td>
                                    <td>{it.date}</td>
                                    <td>{it.view}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </article>
    )
}

export default Article04;