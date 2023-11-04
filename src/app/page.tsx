import Langue from '@/components/langue';
import Accueil from '@/sections/accueil';
import LanguageProvider from './LangContext';

export default function HomePage() {
	return (
		<LanguageProvider>
			<title>Thomas Gendron - Accueil</title>
			<div className='flex flex-col relative w-screen'>
				<Langue />

				<Accueil />

				<div className='bg-red-400 h-screen w-screen'></div>
				<div className='bg-green-300 h-screen w-screen'></div>
			</div>
		</LanguageProvider>
	);
}
