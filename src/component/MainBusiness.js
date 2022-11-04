import { Link } from "react-router-dom"
import { MAIN } from "./Data";

const MainBusiness = () => {
    return (
        <section className="MainBusiness sc">
            <div className="inner">
                <h2>Main Business</h2>
                <div className="Business">
                    {
                        MAIN.slice(0, 3).map((it, idx) => {
                            return (
                                <Link to='/sub02' key={idx}>
                                    <figure className="BusinessItm">
                                        <img src={process.env.PUBLIC_URL + `/img/business_0${idx + 1}.jpg`} alt="" />
                                        <div className="BTitle"><span>{it.tit}</span></div>
                                    </figure>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default MainBusiness;