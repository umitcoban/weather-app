import React, { useState } from "react";




function LocalHour() {
    const [time, setTime] = useState({ date: new Date().toLocaleDateString("tr-TR"), hour: new Date().toLocaleTimeString("tr-TR") });

    function getTime() {
        setInterval(() => {
            setTime((prevVal) => {
                return {
                    ...prevVal,
                    hour: new Date().toLocaleTimeString("tr-TR")
                }
            });
        }, 1000);
    }

    return <div className="local-date-group">
        <p> {time.date} | {time.hour} </p>
    </div>
}

export default LocalHour;