import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MAIN } from './Data';

const BUSINESS01 = [
    { list: "폴리실리콘", list_con: "반도체 및 태양광 발전의 핵심소재인 초고순도 폴리실리콘을 생산하여 전 세계에 공급하고 있습니다." },
    { list: "고순도 인산", list_con: "반도체 웨이퍼 식각에 사용되는 고순도 인산을 세계 유수 반도체 업체에 공급하고 있습니다." },
    { list: "과산화수소", list_con: "표백제, 살균제, IT 등 다양한 산업에서 친환경 산화제로 사용됩니다." },
    { list: "흄드 실리카", list_con: "흄드 실리카는 건설, 반도체 등 산업과 생활용품에 활용되는 친환경 기능성 기초제품입니다." },
    { list: "VIP(진공단열재)", list_con: "OCI의 진공단열재 ENERVAC은 기존 제품 대비 8배의 단열 성능을 자랑합니다." },
]
const BUSINESS02 = [
    { list: "카본블랙", list_con: "국내 최대 카본블랙 생산능력과 시잠점유율을 바탕으로 아시아 시장을 넘어 세계 시장을 향해 도약하고 있습니다." },
    { list: "BTX", list_con: "BTX는 Benzene, Toluene, Xylene 의 3종 제품을 포함하며 OCI의 대표 화학 제품입니다. " },
    { list: "피치", list_con: " 철강 제조공정에서 생산되는 부산물인 콜타르를 정제하여 알루미늄 제련에 쓰이는 피치를 생산합니다." },
    { list: "가소제", list_con: "가소제는 폴리염화비닐 제품에 유연성, 내한성 등의 성능을 부여하고 개량합니다." },
    { list: "TDI", list_con: "자동차, 침대에 쓰이는 Foam 형태와 도료, 접착체 등에 사용되는 TDI를 세계 곳곳에 공급하고 있습니다." },
]
const BUSINESS03 = [
    { list: "태양관 발전", list_con: "OCI는 친환경 에너지원인 태양광 발전을 통해 청정에너지를 공급하고 지구환경 보호에 앞장서고 있습니다." },
    { list: "국내 태양관 발전", list_con: "OCI는 국내 태양광 발전 사업자들에게 원스톱 서비스를 제공하고 있습니다." },
    { list: "미국 Alamo 프로젝트", list_con: "OCI는 미국 최대 573MWdc 규모의 태양광발전소 프로젝트를 완료했습니다." },
    { list: "중국 태양광 발전", list_con: "OCI는 중국에서 7개 프로젝트, 22MWdc 규모의 태양광발전소를 운영합니다." },
    { list: "새만금 열병합 발전", list_con: "OCI는 새만금산업단지에 열병합발전소를 설립하여 친환경 전력과 스팀을 생산합니다." },
]

const Article02 = () => {

    return (
        <article className='Article article02'>
            <h2>사업분야</h2>
            <Tabs>
                <TabList>
                    {
                        MAIN.slice(0, 3).map((it, idx) => {
                            return (
                                <Tab>
                                    <li key={idx}>{it.tit}</li>
                                </Tab>
                            )
                        })
                    }
                </TabList>
                <TabPanel>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/business_sub_01.jpg"} alt="" />
                    </figure>
                    <div className='bs_list'>
                        {
                            BUSINESS01.map((it, idx) => {
                                return (
                                    <div className='bs_itm' key={idx}>
                                        <h3>{it.list}</h3>
                                        <p>{it.list_con}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/business_sub_02.jpg"} alt="" />
                    </figure>
                    <div className='bs_list'>
                        {
                            BUSINESS02.map((it, idx) => {
                                return (
                                    <div className='bs_itm' key={idx}>
                                        <h3>{it.list}</h3>
                                        <p>{it.list_con}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/business_sub_03.jpg"} alt="" />
                    </figure>
                    <div className='bs_list'>
                        {
                            BUSINESS03.map((it, idx) => {
                                return (
                                    <div className='bs_itm'>
                                        <h3>{it.list}</h3>
                                        <p>{it.list_con}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </article>
    )
}

export default Article02;

