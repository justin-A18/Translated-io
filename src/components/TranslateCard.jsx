import { useContext, useState } from 'react';
import { idiomas } from '../services/idiomasService';
import { TranslateForm } from './TranslateForm';
import { TranslateContext } from '../context/TranslateContext';

export const TranslateCard = () => {
	const { handleChangeLan } = useContext(TranslateContext);

	const [activeLanguage, setActiveLanguage] = useState('es');

	const handleClickLanguage = (language) => {
		handleChangeLan(language);
		setActiveLanguage(language);
	};

	return (
		<article className='bg-[#212936] border-2 border-[#4D5562] rounded-xl min-h-60 p-4 flex flex-col gap-3 bg-opacity-85 mb-5 sm:mb-0'>
			<header className='text-[#656B77] w-full flex items-center text-sm gap-1 sm:gap-4 justify-between sm:justify-start'>
				<button>Detecte Language</button>

				<button
					className={`hover:bg-[#4D5562] rounded-lg hover:text-white p-2 transition-all duration-300 hidden sm:block ${
						activeLanguage === 'es' ? 'bg-[#4D5562] text-white' : ''
					}`}
					onClick={() => handleClickLanguage('es')}>
					Spanish
				</button>

				<button
					className={`hover:bg-[#4D5562] rounded-lg hover:text-white p-2 transition-all duration-300 hidden sm:block ${
						activeLanguage === 'en' ? 'bg-[#4D5562] text-white' : ''
					}`}
					onClick={() => handleClickLanguage('en')}>
					English
				</button>

				<select
					className='bg-transparent p-2 rounded-md'
					onChange={(e) => handleChangeLan(e.target.value)}>
					<option value=''>Lenguages</option>

					{idiomas.map((idioma) => (
						<option
							key={idioma.id}
							value={idioma.abreviacion}>
							{idioma.nombre}
						</option>
					))}
				</select>
			</header>

			<hr className='border-[#4D5562] border-[1.8px] w-full' />

			<TranslateForm />
		</article>
	);
};
