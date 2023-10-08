import { Htag } from '@/components';
import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params,
}: {
	params: { type: string };
}): Promise<Metadata> {
	const char = params.type[0].toLocaleUpperCase() + params.type.slice(1);

	return {
		title: `${char} page`,
	};
}

export default async function PageAlias({
	params,
}: {
	params: { type: string };
}) {
	const page = firstLevelMenu.find((item) => item.route === params.type);

	if (!page) {
		notFound();
	}

	return (
		<Htag tag="h1">
			{' '}
			<span className="capitalize">{params.type}</span> page
		</Htag>
	);
}
