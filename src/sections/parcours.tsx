'use client';
import TuileParcours from '@/components/tuile-parcours';
import efreiLogo from '../../public/logo_efrei.png';
import apuLogo from '../../public/logo_apu.png';
import iutLogo from '../../public/logo_saclay.png';
import { useContext, useState } from 'react';
import { LanguageContext } from '../app/LangContext';

export default function Parcours() {
	const { lang, setLang } = useContext(LanguageContext);
	const schoolsFR = [
		{
			id: 0,
			name: "Ecole d'Ingénieur en IT et digital",
			location: 'EFREi Paris, VILLEJUIF',
			date: "2021 - Aujourd'hui",
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: efreiLogo,
		},
		{
			id: 1,
			name: 'Asia Pacific University',
			location: 'Kuala Lumpur, MALAISIE',
			date: 'Janvier - Mai 2022',
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: apuLogo,
		},
		{
			id: 2,
			name: 'DUT Mesures Physiques',
			location: "IUT d'Orsay, Université Paris-Saclay",
			date: '2018 - 2020',
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: iutLogo,
		},
	];
	const schoolsEN = [
		{
			id: 0,
			name: 'IT and digital Engineering school',
			location: 'EFREi Paris, FRANCE',
			date: '2021 - Today',
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: efreiLogo,
		},
		{
			id: 1,
			name: 'Asia Pacific University',
			location: 'Kuala Lumpur, MALAYSIA',
			date: 'January - May 2022',
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: apuLogo,
		},
		{
			id: 2,
			name: 'Technology diploma in Physics Measurements',
			location: 'Paris-Saclay University, FRANCE',
			date: '2018 - 2020',
			details:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe dolor aliquid tempore mollitia, cumque alias sequi soluta. Nostrum minus neque quidem vel deleniti tempora praesentium possimus corporis cupiditate error.',
			logo: iutLogo,
		},
	];
	const schools = lang === 'fr' ? schoolsFR : schoolsEN;
	const [activeSchoolId, setActiveSchoolId] = useState(schools[0].id);
	const dynamicTextClass = () => {
		switch (activeSchoolId) {
			case 0:
				return 'text-blue';
			case 1:
				return 'text-yellow';
			case 2:
				return 'text-bordeaux';
		}
	};
	const dynamicBgClass = () => {
		switch (activeSchoolId) {
			case 0:
				return 'bg-blue';
			case 1:
				return 'bg-yellow';
			case 2:
				return 'bg-bordeaux';
		}
	};

	return (
		<div className='min-h-screen h-full w-full sm:px-12 px-8 relative flex flex-col overflow-x-clip'>
			<div
				className={
					`absolute -bottom-28 -right-36 lg:-bottom-10 lg:-right-12 -z-10 w-[600px] h-[600px] ` +
					dynamicBgClass() +
					` bg-opacity-50 rounded-full blur-3xl`
				}
			/>
			<div className='flex justify-center space-x-4 sm:text-4xl text-3xl lg:my-12 my-4'>
				{lang === 'fr' ? (
					<>
						<div>{'Mon'}</div>
						<div className={`font-cursive ` + dynamicTextClass()}>{'parcours'}</div>
						<div>{'académique'}</div>
					</>
				) : (
					<>
						<div>{'My academic'}</div>
						<div className={`font-cursive ` + dynamicTextClass()}>{'background'}</div>
					</>
				)}
			</div>
			<div className='flex min-h-[80vh] h-[80vh]'>
				<div className='hidden sm:flex w-1/2 justify-center items-center lg:px-12 px-4 h-full'>
					<div className='p-6 rounded-2xl shadow-card min-h-[50%]'>
						<div className={`text-2xl flex justify-center items-center text-center py-6 h-28 ` + dynamicTextClass()}>
							<>{schools[activeSchoolId].name}</>
						</div>
						<div className='text-lg indent-4 text-justify'>{schools[activeSchoolId].details}</div>
					</div>
				</div>
				<div className='sm:w-1/2 w-full flex flex-col justify-around items-center lg:px-12 px-4 border-black sm:border-l-2'>
					<TuileParcours school={schools[0]} activeSchoolId={activeSchoolId} setActiveSchoolId={setActiveSchoolId} />
					<TuileParcours school={schools[1]} activeSchoolId={activeSchoolId} setActiveSchoolId={setActiveSchoolId} />
					<TuileParcours school={schools[2]} activeSchoolId={activeSchoolId} setActiveSchoolId={setActiveSchoolId} />
				</div>
			</div>
		</div>
	);
}
