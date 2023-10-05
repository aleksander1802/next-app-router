import { getPage } from '@/api/page';
import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// export async function generateMetadata({
// 	params,
// }: {
// 	params: { alias: string };
// }): Promise<Metadata> {
// 	const page = await getPage(params.alias);

// 	return {
// 		title: page?.metaTitle,
// 	};
// }

// export async function generateStaticParams() {
// 	const menu = await getMenu(0);

// 	return menu.flatMap((item) =>
// 		item.pages.map((page) => ({ alias: page.alias })),
// 	);
// }

export default async function PageAlias({
	params,
}: {
	params: { type: string };
}) {
	const page = firstLevelMenu.find((item) => item.route === params.type);

	if (!page) {
		notFound();
	}

	return <div>Page {params.type}</div>;
}
