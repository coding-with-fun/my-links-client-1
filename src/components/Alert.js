import React, { useEffect, useState } from "react";

const Alert = ({ message, type }) => {
    const [alertClass, setAlertClass] = useState("alert_show_in");

    useEffect(() => {
        setTimeout(function () {
            setAlertClass("alert_show_out");
        }, 3000);
    }, []);

    return (
        <div className={`alert__container ${type} ${alertClass}`}>
            <p>{message}</p>

            <i
                className="bi bi-x close_icon"
                onClick={() => setAlertClass("alert_show_out")}
            ></i>
        </div>
    );
};

export default Alert;
