import { Button, Htag, P } from '@/components';

export default function Home() {
	return (
		<main>
			<Htag tag="h1">Main page</Htag>
			<Button
				appearance="primary"
				arrow="right"
			>
				Кнопка
			</Button>
			<P size="m">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Consectetur, molestias aliquid. Rem excepturi minus, sequi
				ratione saepe magni tenetur nulla!
			</P>
		</main>
	);
}
