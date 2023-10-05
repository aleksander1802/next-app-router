import { Button, Htag, P, Tag } from '@/components';

export default function Home() {
	return (
		<div>
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
			<Tag size="s">Маленький</Tag>
			<Tag size="m">Средний</Tag>
			<Tag
				size="m"
				color="red"
			>
				Red
			</Tag>
			<Tag
				size="m"
				color="primary"
			>
				Primary
			</Tag>
			<Tag size="m">Ghost</Tag>
			<Tag
				size="m"
				color="green"
			>
				Green
			</Tag>
		</div>
	);
}
