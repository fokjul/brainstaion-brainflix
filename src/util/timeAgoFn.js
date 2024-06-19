// Function to convert milliseconds info human readable format from https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
export default function timeAgo(input) {
    const date = (input instanceof Date) ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat('en');
    const ranges = {
        years: 3600 * 24 * 365, //31536000
        months: 3600 * 24 * 30, //2592000
        weeks: 3600 * 24 * 7, //604800
        days: 3600 * 24, //86400
        hours: 3600,
        minutes: 60,
        seconds: 1
    };
    
    for (let key in ranges) {
        const secondsElapsed = (date.getTime() - Date.now()) / 1000;
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            //if number of milliseconds elapsed from the comment date < number of milliseconds in a year "3600 * 24 * 365" display in the following format: 
            if (Math.abs(secondsElapsed) < ranges['years']){
                return formatter.format(Math.round(delta), key);
            }

            if (Math.abs(secondsElapsed) > ranges['years']){
                const commentDate = new Date(input);
                return commentDate.toDateString();
            }
            
            //if number of milliseconds elapsed from the comment date > number of milliseconds in a year "3600 * 24 * 365" display initial input: 
            else {
                return input;
            }
        }
    }

    //if secondsElapsed is almost even to date
    return 'just now'
}