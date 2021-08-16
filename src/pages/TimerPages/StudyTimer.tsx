import React from 'react'

interface ICountdown {
    minutes: number;
    seconds: number;
}

const StudyTimer = ({ minutes = 0, seconds = 60 }: ICountdown) => {
    const [time, setTime] = React.useState<ICountdown>({minutes, seconds});

    const tick = () => {
        if (time.minutes === 0 && time.seconds === 0)
            reset()
        else if (time.seconds === 0) {
            setTime({ minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({ minutes: time.minutes, seconds: time.seconds - 1});
        }
    };

    const reset = () => setTime({ minutes: time.minutes, seconds: time.seconds});

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div id="timer">
            {`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
        </div>
    );
}

export default StudyTimer;