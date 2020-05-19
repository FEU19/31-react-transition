import React, { useState } from 'react';
import './App.css';

function App() {
    // State variables
    const [reluctantGrow, setReluctantGrow] = useState(false);

    // "Computed properties"
    let reluctantCssClass = 'reluctant-grow';
    if( reluctantGrow ) {
        reluctantCssClass += ' active';
    }

    return (
        <div className="App">
            <header className="App-header">
                Animation demo
            </header>
            <main>
                <section className="grow">
                    <button onClick={() => setReluctantGrow(!reluctantGrow)}> I will grow </button>
                    <div className={reluctantCssClass}> Click button to grow me </div>
                </section>
            </main>
        </div>
    );
}

export default App;
