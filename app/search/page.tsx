import { getPage } from '@/api/page';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params,
}: {
	params: { alias: string };
}): Promise<Metadata> {
	const page = params.alias;

	return {
		title: page,
	};
}

export default function SearchAlias({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const page = 'search';

	if (!page) {
		notFound();
	}

	return <div>Search result: {searchParams.query}</div>;
}
