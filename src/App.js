import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
    // State variables
    const [reluctantGrow, setReluctantGrow] = useState(false);

    // "Computed properties"
    let reluctantCssClass = 'reluctant-grow';
    if( reluctantGrow ) {
        reluctantCssClass += ' active';
    }

    const [growSpring, setGrowSpring] = useSpring(
        () => ({ transform: 'scale(1, 1)' })
    );

    const handleGrowClick = () => {
        setReluctantGrow(!reluctantGrow);  // uppdaterar inte state-variabeln direkt
        setGrowSpring({
            transform: reluctantGrow ? 'scale(1, 1)' : 'scale(1.2, 1.2)'
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                Animation demo
            </header>
            <main>
                <section className="grow">
                    <button onClick={handleGrowClick}> I will grow </button>
                    <div className={reluctantCssClass}> Click button to grow me </div>
                    <animated.div style={growSpring}> Grown by React Spring </animated.div>
                </section>
            </main>
        </div>
    );
}

export default App;
