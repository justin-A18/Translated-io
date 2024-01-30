import { TranslateCard } from './TranslateCard';
import { TranslateResult } from './TranslateResult';

export const Translate = () => {
	return (
		<div className='w-full sm:grid lg:grid-cols-2 gap-3'>
			<TranslateCard />
			<TranslateResult />
		</div>
	);
};
