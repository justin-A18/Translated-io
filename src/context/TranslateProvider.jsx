import PropTypes from 'prop-types';
import { TranslateContext } from './TranslateContext';
import { useState } from 'react';

export const TranslateProvider = ({ children }) => {
	const [text, setText] = useState('');
	const [textResult, setTextResult] = useState('');
	
	const [language, setLanguage] = useState('es');
	const [languageResult, setLanguageResult] = useState('en');

	const getTextTranslate = (text) => {
		if (text.trim().length < 1) return;
		setText(text);
	};

	const getTextResult = (text) => {
		if (text.trim().length < 1) return;
		setTextResult(text);
	};

	const handleChangeLan = (language) => {
		setLanguage(language);
	};

	const handleChangeResLan = (language) => {
		setLanguageResult(language);
	};

	const handleReadText = (
		textToRead,
		voiceName = 'Telugu+Robosoft4'
	) => {
		if ('speechSynthesis' in window) {
			const utterance = new SpeechSynthesisUtterance(textToRead);
			const voices = window.speechSynthesis.getVoices();

			const selectedVoice = voices.find((voice) => voice.name === voiceName);

			if (selectedVoice) {
				utterance.voice = selectedVoice;
			} else {
				console.warn(
					`No se encontró la voz "${voiceName}". Utilizando la voz predeterminada.`
				);
			}

			speechSynthesis.speak(utterance);
		} else {
			alert('Tu navegador no soporta la API de Text-to-Speech.');
		}
	};

	return (
		<TranslateContext.Provider
			value={{
				text,
				getTextTranslate,
				textResult,
				getTextResult,
				language,
				handleChangeLan,
				languageResult,
				handleChangeResLan,
				handleReadText,
			}}>
			{children}
		</TranslateContext.Provider>
	);
};

TranslateProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
