import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import { firstLevelMenu } from '@/helpers/helpers';
import { pathMenu } from '@/helpers/path';
import { TopPageComponent } from '@/page-components';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params,
}: {
	params: { alias: string };
}): Promise<Metadata> {
	const page = await getPage(params.alias);

	return {
		title: page?.metaTitle,
	};
}

export default async function PageAlias({
	params,
}: {
	params: { type: string; alias: string };
}) {
	const page = await getPage(params.alias);

	if (!page) {
		notFound();
	}

	const firstCategoryItem = pathMenu.find((m) => m.route === params.type);

	const products = await getProducts(page.category);

	return (
		<TopPageComponent
			firstCategory={firstCategoryItem!.id}
			page={page}
			products={products}
		/>
	);
}
