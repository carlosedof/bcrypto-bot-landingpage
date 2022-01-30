import React, {useState} from 'react';
import Header from "./components/header";
import Cover from "./components/cover";
import Features from "./components/features";
import Prices from "./components/prices";
import GetStarted from "./components/getStarted";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";

export const ApplicationContext = React.createContext({});

function App() {
    const [isResponsiveMenuVisible, setIsResponsiveMenuVisible] = useState(false)
    const userLang = navigator.language || navigator.userLanguage;
    const [lang, setLang] = useState(userLang === 'pt-BR' ? 'pt' : 'en')
  return (
      <ApplicationContext.Provider value={{lang, setLang}}>
      <div onClick={() => setIsResponsiveMenuVisible(false)}
           style={{backgroundColor: 'black', opacity: 0.5, width: '100%', height: '100%', position: 'fixed', zIndex: isResponsiveMenuVisible ? 1 : -1}} />
      <div className="main">
        <section id='Header'>
            <Header setIsResponsiveMenuVisible={setIsResponsiveMenuVisible} isResponsiveMenuVisible={isResponsiveMenuVisible} />
        </section>
        <section id='Cover'>
            <Cover />
        </section>
        <section id='Features'>
            <Features />
        </section>
        <section id='Prices'>
            <Prices />
        </section>
        <section id='GetStarted'>
            <GetStarted />
        </section>
        <section id='AboutUs'>
            <AboutUs />
        </section>
      <Footer />

    </div>
      </ApplicationContext.Provider>
  );
}

export default App;
