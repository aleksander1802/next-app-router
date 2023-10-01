import { getMenu } from '@/api/menu';

export async function Menu() {
	const menu = await getMenu(0);

	console.log(menu);

	return (
		<div>
			<ul>
				{menu.flatMap((item, i) => {
					return <li key={i}>{item._id.secondCategory}</li>;
				})}
			</ul>
		</div>
	);
}
