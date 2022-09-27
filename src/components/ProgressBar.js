import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed} = props;

    const containerStyles = {
        height: 27,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 20,
    }

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
        textAlign: "right"
    }

    const labelStyles = {
        padding: 10,
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
        fontFamily: "ChakraPetch"
    }
    return(
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;