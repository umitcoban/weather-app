import React from "react";
import Zoom from '@mui/material/Zoom';

function CityHeader(props) {
    return <Zoom in={props.showStat} style={{transitionDelay:'900ms',transitionDuration:'2000ms'}}>
        <div className="city-header">
            <p>{props.header}</p>
        </div>
    </Zoom>
}

export default CityHeader;