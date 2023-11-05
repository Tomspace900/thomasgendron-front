import Image, { StaticImageData } from 'next/image';

export type SchoolType = {
	id: number;
	name: string;
	location: string;
	date: string;
	details: string;
	logo: StaticImageData;
};

type TuileParcoursProps = {
	school: SchoolType;
	activeSchoolId: number;
	setActiveSchoolId: React.Dispatch<React.SetStateAction<number>>;
};

export default function TuileParcours({ school, activeSchoolId, setActiveSchoolId }: TuileParcoursProps) {
	const { name, location, date, logo } = school;
	function selectSchool(school: SchoolType) {
		setActiveSchoolId(school.id);
	}
	const dynamicGradientClass = () => {
		switch (activeSchoolId) {
			case 0:
				return 'bg-gradient-to-r from-blue to-white ';
			case 1:
				return 'bg-gradient-to-r from-yellow to-white ';
			case 2:
				return 'bg-gradient-to-r from-bordeaux to-white ';
		}
	};

	return (
		<div
			className={
				`flex-1 p-6 flex lg:flex-row flex-col justify-between w-full min-h-[25%] max-h-[30%] rounded-2xl shadow-card bg-white bg-opacity-70 hover:` +
				dynamicGradientClass() +
				(activeSchoolId === school.id ? dynamicGradientClass() + ` bg-opacity-100` : '')
			}
			onMouseOver={() => selectSchool(school)}>
			<div className='lg:w-3/5 w-full flex flex-col justify-between'>
				<div>
					<div className='sm:text-xl pb-2'>{name}</div>
					<div className='sm:text-lg font-light'>{location}</div>
				</div>
				<div className='sm:text-lg pt-2'>{date}</div>
			</div>
			<div className='flex lg:w-2/5 w-full justify-center sm-pt-0 sm:pt-4 items-center'>
				<Image src={logo} width={300} height={300} alt='logo' className='lg:w-full w-3/5' />
			</div>
		</div>
	);
}
