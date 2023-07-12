import type { Metadata } from 'next';
import Codepen from './page';
import { EditorProvider } from './context/context';

export const metadata: Metadata = {
	title: 'Codepen',
	description: 'Frontend helpers for you',
};

export default function CodepenLayout() {
	return (
		<EditorProvider>
			<Codepen />
		</EditorProvider>
	);
}
