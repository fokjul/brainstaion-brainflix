const redirectToHomePage = (setTimeLeft, navigate, setDisplayMainSection) => {
    const delay = 5000;
    setTimeLeft(delay)

    //Calculates time left to redirect
    const timeToRedirect = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {return prevTimeLeft - 1000})
        }, 1000);

    //Redirects to home page and clears interval after the delay
    setTimeout(()=> { 
    if(timeToRedirect === 0) setDisplayMainSection(true)
    navigate('/')
    clearInterval(timeToRedirect)
    }, delay)

}

export default redirectToHomePage
