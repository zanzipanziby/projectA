import React, {useEffect, useState, KeyboardEvent, useRef} from 'react';
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(60)
    const [isCounting, setIsCounting] = useState(false)
    const [background, setBackground] = useState('white')

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
                setSeconds( seconds => seconds >= 1 ? seconds - 1 : 0)
            }, 1000
        )
        return () => clearInterval(interval)
    }, [isCounting])

    const onPress = (e: KeyboardEvent<HTMLInputElement>) => {
        debugger
        if(e.key=== 'Enter' && isCounting){
            setIsCounting(false)
            setBackground('green')
        }
        if(e.key === ' ' && isCounting) {
            isCounting &&
            setIsCounting(false)
            isCounting &&
            setBackground('red')
        }
        if(e.key === 'Escape') {
            setIsCounting(false)
            setSeconds(60)
            setBackground('white')
        }
    }

    const onClickHandler = () => {
        setSeconds(60)
        setIsCounting(true)
        setBackground('white')
        // @ts-ignore
        buttonRef.current.blur()

    }




    return (
        <div className="App">

            <div className={'wrapper'} onKeyDown={onPress} tabIndex={0} style={{background:background}}>
                <div>
                    <div className={'timer'}>{seconds}</div>
                    <div style={{display:"flex", justifyContent: "center" }}>
                        <div className={"startButton"}  onClick={onClickHandler}>START</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
