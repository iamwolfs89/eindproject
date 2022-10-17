import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

// const LanguageContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<LanguageContext.Provider value={{activeLanguage: 'nederlands'}}>*/}
            <App/>
        {/*</LanguageContext.Provider>*/}
    </React.StrictMode>
);
