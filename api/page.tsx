import { API } from '@/app/api';
import { PageItem } from '@/interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
	const res = await fetch(API.topPage.byAlias + alias, {
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		return null;
	}

	return res.json();
}
