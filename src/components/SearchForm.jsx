import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';


const customStyle = {
    inputStyle: {
        margin: "5% auto",
        backgroundColor: "rgba(255,255,255,0.4)",
        textAlign: "center",
        borderRadius: "8%",
        width: "70%",
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    searchBtn: {
        margin: "5% 2% 5% 8%",
        display: "inline-flex",
        textAlign: "center",
        justifyContent: "center",
        justifyItems: "center",
        backgroundColor: "transparent"
    }

};



function SearchForm(props) {

    const [inputVal, setInputVal] = useState("");
    
    
    function handleChaneInput(event){
        setInputVal(event.target.value);
    }
    function sendCityName(event){
        props.getCityName(inputVal);
        event.preventDefault();
    }
    return <div className="search-form">
        <form onSubmit={sendCityName} className="search-form">
            <Zoom in={true} style={{ transitionDelay: '900ms', transitionDuration: '2000ms' }}>
                <TextField onChange={handleChaneInput} value={inputVal} inputMode="search" name="cityName" style={customStyle.inputStyle} InputProps={{ style: customStyle.textStyle }} placeholder="Şehir Adı Giriniz" />
            </Zoom>
            <Fade in={true} style={{ transitionDelay: '1500ms', transitionDuration: '2400ms' }}>
                <Fab type="submit" color="primary" sx={customStyle.searchBtn} aria-label="edit">
                    <SearchIcon />
                </Fab>
            </Fade>
        </form>
    </div>
}

export default SearchForm;