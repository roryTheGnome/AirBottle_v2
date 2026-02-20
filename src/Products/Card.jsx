import React from "react";
import PropTypes from "prop-types";

function Card(props){

    const getQuality= ()=>{
        const quality= Number(props.aquality);

        if(quality===3)return 'low-quality';
        if(quality===4)return 'mid-quality';
        return 'high-quality';
    }

    return(
        <div className={`products ${getQuality()}`}>

            <h3 className="card-title">{props.pName}</h3>
            <p>Air Quality: {props.aquality}</p>
            <p>Air Tones: {props.tones}</p>

            {/*<p>Product Id: {props.pId}</p>
                <p>Product Description: {props.description}</p> */}

            {/*if the quality is 3 make the card light blue ,5 dark blue etc*/}


        </div>
    );
}

Card.propTypes={
    description: PropTypes.string,
    pName: PropTypes.string,
    pId: PropTypes.string,
    aquality: PropTypes.string,
    tones: PropTypes.string
}

Card.defaultProps={
    description: "-",
    pName: "DEMO",
    pId: "-",
    aquality: "-",
    tones: "-"
}

export default Card