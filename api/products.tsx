import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';

export async function getProducts(page: string): Promise<ProductModel[]> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		body: JSON.stringify({
			category: page,
			limit: 10,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
		next: { revalidate: 10 },
	});

	return res.json();
}
