import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const TranslateFormResult = () => {
	const { textResult, handleReadText } = useContext(TranslateContext);

	return (
		<div>
			<textarea
				className='resize-none outline-none bg-transparent text-white'
				cols='30'
				rows='8'
				maxLength={300}
				value={textResult}
				disabled></textarea>

			<footer className='w-full flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<button
						className='border-2 p-2 rounded-lg border-[#4D5562]'
						onClick={() => handleReadText(textResult)}>
						<img
							src='./assets/sound_max_fill.svg'
							alt='sound'
						/>
					</button>

					<button className='border-2 p-2 rounded-lg border-[#4D5562]'>
						<img
							src='./assets/Copy.svg'
							alt='copy'
						/>
					</button>
				</div>
			</footer>
		</div>
	);
};
