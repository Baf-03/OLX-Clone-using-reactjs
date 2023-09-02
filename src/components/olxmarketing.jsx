import "./olxmarketing.css"
import image from "../assets/mobileolx.png"
import appstore from "../assets/appstore.svg"

const OlxMarketing =()=>{


    return(
        <>
            <section className="bg-body-tertiary">
                <section className="container olxsection">
                <div className="imgolxdiv"><img src={image} className="imgolx"/></div>

                   <div className="mt-3">

                    <div><h1>TRY THE OLX APP</h1></div>
                    <div>Buy,sell and find just about anything using the app on your mobile</div>
                </div>
                <div className="line"></div>

                <div className="">
                    <div><h1>GET YOUR APP TODAY</h1></div>
                    <div>
                        <img src={appstore} className="appstore"/>
                        <img src={appstore} className="appstore"/>
                        <div></div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default OlxMarketing