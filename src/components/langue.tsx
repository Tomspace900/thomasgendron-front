'use client';
import { useContext } from 'react';
import { LanguageContext } from '../app/LangContext';

export default function Langue() {
	const { lang, setLang } = useContext(LanguageContext);

	function changeLangue(lg: string) {
		if (lang === 'fr' && lg !== 'fr') {
			setLang('en');
			console.log('language changed to EN');
		} else if (lang === 'en' && lg !== 'en') {
			setLang('fr');
			console.log('language changed to FR');
		}
	}
	return (
		<div className='fixed top-5 lg:right-32 right-10 z-10'>
			<div className='flex px-2 space-x-4 lg:space-x-8 text-xl'>
				<p
					className='cursor-pointer hover:scale-110 transition-all duration-300'
					onClick={() => {
						changeLangue('fr');
					}}>
					{'Français'}
				</p>
				<p
					className='cursor-pointer hover:scale-110 transition-all duration-300'
					onClick={() => {
						changeLangue('en');
					}}>
					{'English'}
				</p>
			</div>
			<div className='relative w-full h-[1.5px]'>
				<div
					className={
						'absolute h-full mt-1 bg-black transition-all duration-300 ' +
						(lang === 'fr' ? 'left-0 w-[50%]' : 'left-[55%] w-[45%]')
					}></div>
			</div>
		</div>
	);
}
