import { useTranslate } from '../hooks/useTranslate';

export const TranslateForm = () => {
	const { inputValue, handleReadButton, handleChangeInput, handleSubmitForm } =
		useTranslate();

	return (
		<form onSubmit={handleSubmitForm}>
			<textarea
				className='resize-none outline-none bg-transparent text-white'
				cols='30'
				rows='8'
				name='texto'
				value={inputValue}
				onChange={handleChangeInput}
				maxLength={300}></textarea>

			<footer className='w-full flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<button
						className='border-2 p-2 rounded-lg border-[#4D5562]'
						onClick={handleReadButton}>
						<img
							src='./sound_max_fill.svg'
							alt='sound'
						/>
					</button>

					<button className='border-2 p-2 rounded-lg border-[#4D5562]'>
						<img
							src='./Copy.svg'
							alt='copy'
						/>
					</button>
				</div>

				<button
					className='bg-[#3762E4] flex items-center p-3 rounded-xl text-white'
					type='submit'>
					<img
						src='./Sort_alfa.svg'
						alt=''
					/>
					<span>Translate</span>
				</button>
			</footer>
		</form>
	);
};
