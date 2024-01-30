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
		<main className='w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-7 font-DM-Sans font-bold relative'>
			<div className='hero-img bg-cover bottom-8 bg-right-bottom w-full absolute z-[1] h-full'></div>

			<section className='w-full z-10 md:w-[90%] lg:w-[60rem] xl:w-[70rem] min-h-[20rem] flex flex-col items-center gap-10'>
				<Logo />

				<Translate />
			</section>
		</main>
	);
};
