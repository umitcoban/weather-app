import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function LoadingScreen(){
    return <div> <CircularProgress color="success" size={120} thickness={6}/> </div>
}


export default LoadingScreen;