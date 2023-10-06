import { API } from '@/app/api';
import {
	IReviewForm,
	IReviewSentResponse,
} from '@/components/ReviewForm/ReviewForm.interface';

export async function postReview({
	formData,
	productId,
}: {
	formData: IReviewForm;
	productId: string;
}): Promise<IReviewSentResponse> {
	const res = await fetch(API.review.createDemo, {
		method: 'POST',
		body: JSON.stringify({
			...formData,
			productId,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
		next: { revalidate: 10 },
	});

	return res.json();
}
