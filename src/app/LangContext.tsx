'use client';
import { createContext, useState } from 'react';

type LanguageContextType = {
	lang: string;
	setLang: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
	lang: 'fr',
	setLang: () => {},
});

const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState('fr');
	return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
