import "./Footer.css"
export default function Footer (){
    return (
        <div className="Footer">
            <div className="contactUs">
                <img src="phone-call.png" style={{height: "100%", marginRight:"5px"}}/>
                <p>Toll free <b>1800 200 1234</b></p>
            </div>
            <div className="contactUs">
                <img src="facebook.png" style={{height: "100%", marginRight:"5px"}}/>
                <p style={{color:"black"}}>www.facebook.com/cripumps</p>
            </div>
            <div className="contactUs">
                <img src="global.png" style={{height: "100%", marginRight:"5px"}} />
                <p style={{color:"black"}}>www.crigroups.com</p>
            </div>
        </div>
    )
}