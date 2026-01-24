import React from 'react';
import SoundGrid from './components/SoundGrid';

function App() {
    return (
        <>
            <header>
                <h1>Iconic Sounds</h1>
            </header>
            <main>
                <SoundGrid />
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Iconic Soundboard. Sounds are property of respective brands.</p>
            </footer>
        </>
    );
}

export default App;
