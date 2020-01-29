import React from "react";

function Box() {

    const [health, setHealth] = React.useState(100);
    const [danger, setDanger] = React.useState("green");

    const decreaseHealth = ()=> {
        setHealth(health-5);

        if(health < 20) {
            setDanger("#6C0C12");
        }else if (health >=20&& health < 50) {
            setDanger("orange");

        }else {
            setDanger("green");
        }
    }


    const styleOuter = {
        height:"100px",
        width:"100%",
        backgroundColor: "#ffe2c1",
        color:"white",
        transition:"0.5s"
    };

    const styleInner = {
        height:"100px",
        width: health + "%",
        backgroundColor: danger,
        color:"white",
        transition:"0.5s"
    };

    return (
        <div style={styleOuter} onClick={decreaseHealth}>
            <div style={styleInner}></div>
        </div>
    )
}

export default Box