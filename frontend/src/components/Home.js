function Home() {
    function sendMail(mail){
        window.location.href = "mailto:"+mail;
    }
    return (
        <>
            <div
                className="bg-image text-center shadow-1-strong rounded mb-5 text-white"
                style={{
                    backgroundImage: `url("background.jpg")`,
                    backgroundSize: "100%",
                    padding: "10%",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <h1 className=" h2"
                    style={{fontSize: "600%", textShadow: "2px 2px 3px #04030F", fontWeight: "800"}} className="ralewayFont"><span
                    style={{color: "#63458A"}}>Eat</span><span style={{color: "#E3B23C"}}>ical</span></h1>

                <h5 style={{marginRight: "9%", marginLeft: "9%"}} className="ralewayFont">
                    Every month, people like you use Eatical to save tens of thousands of meals from ending up in the
                    trash
                    bin. With a 97% satisfaction rate on all orders, saving the world has never tasted this good!
                </h5>
            </div>
            <div className={"row text-center"}>
                <div className={"col p-5"}>
                    <p className="ralewayFont">Upcoming</p>
                    <br/>
                    <h4 className="ralewayFont" style={{fontWeight: "600"}}>Save as much as you can eat<br/>from your phone</h4>
                    <br/>
                    <p className="ralewayFont" style={{fontWeight: "300"}}>For consumers, using ResQ means discovering new restaurants, cafeterias and grocery stores at
                        around 50% discount and creating a more sustainable environment while at it.</p>
                </div>
                <div className={"col"}>
                    <img style={{width: "50%", height: "auto"}} src={"phone.png"}/>
                </div>
            </div>
            <hr/>
            <div className={"row text-center"}>
                <h1>About us</h1>
                <div className={"col"}>
                    <img style={{width: "80%", height: "auto", borderRadius: "50%"}} src={"makedonka.jpg"}/>
                    <h4 onClick={() => sendMail("makedonka.binova@yahoo.com")} style={{cursor: "pointer"}}>Makedonka Binova</h4>
                    <p>Student</p>
                </div>
                <div className={"col"}>
                    <img style={{width: "80%", height: "auto", borderRadius: "50%"}} src={"kristijan.jpg"}/>
                    <h4 onClick={() => sendMail("kristijan.mitrov@student.um.si")} style={{cursor: "pointer"}}>Kristijan Mitrov</h4>
                    <p>Student</p>
                </div>
                <div className={"col"}>
                    <img style={{width: "80%", height: "auto", borderRadius: "50%"}} src={"stefan.jpg"}/>
                    <h4 onClick={() => sendMail("stefan.srnjakov@student.um.si")} style={{cursor: "pointer"}}>Stefan Srnjakov</h4>
                    <p>Student</p>
                </div>
            </div>
            <hr/>
            <p className={"text-center"}>Copyright © Najaki</p>
        </>
    )
}

export default Home;