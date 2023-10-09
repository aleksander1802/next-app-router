import { Htag } from '@/components';
import { pathMenu } from '@/helpers/path';
import styles from './Mainpage.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.mainPage}>
			<Htag tag="h1">Главная страница</Htag>
			<Htag tag="h2">Советую воспользоваться навигационным меню.</Htag>
			<ul>
				В данный момент доступно {pathMenu && pathMenu.length}{' '}
				категории:
				{pathMenu.map((item) => {
					return (
						<li key={item.route}>
							<Htag tag="h2">
								<span className={styles.link}>{item.name}</span>
							</Htag>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
