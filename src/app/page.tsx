import LanguageProvider from './LangContext';
import Langue from '@/components/langue';
import Accueil from '@/sections/accueil';
import Parcours from '@/sections/parcours';
import Projets from '@/sections/projets';

export default function HomePage() {
	return (
		<LanguageProvider>
			<title>Thomas Gendron - Accueil</title>
			<div className='flex flex-col relative w-screen'>
				<Langue />

				<Accueil />

				<Parcours />

				<Projets />
			</div>
		</LanguageProvider>
	);
}
