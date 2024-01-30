import { useContext, useState } from 'react';
import { TranslateContext } from '../context/TranslateContext';
import { converterText } from '../helpers/converterText';

export const useTranslate = () => {
	const [inputValue, SetInputValue] = useState('');

	const { getTextTranslate, text, handleReadText } =
		useContext(TranslateContext);

	const handleReadButton = () => {
		const newValue = converterText(text, '%20', '');
		handleReadText(newValue);
	};

	const handleChangeInput = ({ target }) => {
		const val = target.value;
		SetInputValue(val);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		if (inputValue.trim().length < 1) return;
		const newValue = converterText(inputValue);
		getTextTranslate(newValue);
	};

	return {
		inputValue,
		handleReadButton,
		handleChangeInput,
		handleSubmitForm,
	};
};
