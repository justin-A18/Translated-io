import { useContext, useEffect, useState } from 'react';
import { getData } from './helpers/getData';
import { Logo, Translate } from './components';
import { TranslateContext } from './context/TranslateContext';
import { TRANSLATE_API_URL } from './services/translateService';

export const App = () => {
	const [translateText, setTranslateText] = useState('');

	const { text, getTextResult, language, languageResult } =
		useContext(TranslateContext);

	useEffect(() => {
		const getTranslateText = async () => {
			if (language !== '' && languageResult !== '' && text !== '') {
				const { responseData } = await getData(
					`${TRANSLATE_API_URL}?q=${text} &langpair=${language || 'en'}|${
						languageResult || 'fr'
					}`
				);
				setTranslateText(responseData.translatedText);
			}
		};

		getTranslateText();
	}, [text, language, languageResult]);

	useEffect(() => {
		getTextResult(translateText);
	}, [getTextResult, translateText]);

	return (
		<main className='w-full min-h-screen hero-img bg-cover bg-right flex flex-col items-center justify-end p-3 sm:p-7 font-DM-Sans font-bold'>
			<section className='w-full md:w-[90%] lg:w-[60rem] xl:w-[70rem] min-h-[20rem] flex flex-col items-center gap-8'>
				<Logo />

				<Translate />
			</section>
		</main>
	);
};
