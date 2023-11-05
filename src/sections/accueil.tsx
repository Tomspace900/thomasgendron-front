'use client';
import { useContext } from 'react';
import { LanguageContext } from '../app/LangContext';
import Image from 'next/image';
import profilePic from '../../public/Portrait-home.png';
import arrow from '../../public/arrow.svg';

export default function Accueil() {
	const { lang, setLang } = useContext(LanguageContext);

	function scrollDown() {
		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
	}

	return (
		<div className='min-h-screen h-full w-full sm:px-12 px-8 relative flex flex-col lg:flex-row overflow-x-clip'>
			<div className='absolute -top-28 -left-36 lg:-top-10 lg:-left-12 -z-10 w-[500px] h-[500px] bg-turquoise bg-opacity-30 rounded-full blur-3xl' />
			<div className='md:mt-36 mt-24 md:ml-24 ml-0 flex flex-col items-start space-y-10'>
				<h1 className='font-extralight sm:text-8xl text-6xl lg:ml-20 ml:44'>
					{'Thomas'}
					<br></br>
					{'GENDRON'}
				</h1>
				<line className='w-[33%] h-[1px] bg-black'></line>
				<p className=' font-light md:text-3xl text-2xl min-w-[50vw]'>
					{lang === 'fr'
						? "Bonjour moi c'est Thomas j'essaye de trouver le temps pour finir ce site !"
						: "Hello my name is Thomas I'm trying to find the time to finish this website !"}
				</p>
			</div>
			<div className='flex items-end w-full lg:justify-end justify-center'>
				<Image
					src={profilePic}
					width={1324}
					height={1572}
					priority
					alt='profile picture'
					className='lg:w-full w-[90%] lg:pt-0 pt-8'
				/>
			</div>
			<Image
				src={arrow}
				width={50}
				height={50}
				alt='arrow'
				className='absolute sm:bottom-10 bottom-6 lg:left-56 left-10 z-10 h-20 sm:h-36 cursor-pointer hover:scale-110 transition-all duration-300'
				onClick={scrollDown}
			/>
		</div>
	);
}
