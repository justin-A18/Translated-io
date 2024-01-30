import { useContext, useState } from 'react';
import { idiomas } from '../services/idiomasService';
import { TranslateFormResult } from './TranslateFormResult';
import { TranslateContext } from '../context/TranslateContext';

export const TranslateResult = () => {
	const { handleChangeResLan } = useContext(TranslateContext);

	const [activeLanguage, setActiveLanguage] = useState('en');

	const handleClickLanguage = (language) => {
		handleChangeResLan(language);
		setActiveLanguage(language);
	};

	return (
		<article className='bg-[#121826] border-2 border-[#4D5562] rounded-3xl p-7 flex flex-col gap-3 bg-opacity-85'>
			<header className='text-[#656B77] w-full flex items-center text-sm gap-1 sm:gap-3 justify-between sm:justify-start'>
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
					onChange={(e) => handleChangeResLan(e.target.value)}>
					<option value=''>Languages</option>

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

			<TranslateFormResult />
		</article>
	);
};
