import { useState, createContext } from 'react';

export const langContext = createContext('en');

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const switchLang = () =>
    setLang(prevLang => (prevLang === 'ua' ? 'en' : 'ua'));

  return (
    <langContext.Provider value={{ lang, switchLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangProvider;
