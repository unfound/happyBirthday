import React from 'react';
import logo from '../logo.svg';

const Home = () => {
    return (
        <header className="space-y-4 h-screen flex flex-col items-center justify-center">
            <img src={logo} className="App-logo pointer-events-none h-2/5 motion-safe:animate-spin-slow" alt="logo" />
            <h1 className="text-4xl">Hello Vite, React, Redux Toolkit + Tailwind CSS!</h1>
            <p>
                Edit <code>App.jsx</code> and save to test HMR updates.
            </p>
            <p className="text-base">
                <a
                    className="text-react"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="text-react"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
                {' | '}
                <a
                    className="text-react"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux Toolkit Docs
                </a>
                {' | '}
                <a
                    className="text-react"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tailwind
                </a>
            </p>
        </header>
    );
};

export default Home
