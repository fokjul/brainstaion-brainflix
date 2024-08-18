import { useEffect } from "react";

const redirectToHomePage = (setTimeLeft, navigate) => {
    const delay = 5000;
    setTimeLeft(delay)

    //Calculates time left to redirect
    const timeToRedirect = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {return prevTimeLeft - 1000})
        }, 1000);

    //Redirects to home page and clears interval after the delay
    setTimeout(()=> { 
    navigate('/')

    clearInterval(timeToRedirect)
    }, delay)

}

export default redirectToHomePage
