import { getMenu } from '@/api/menu';
import styles from './Menu.module.css';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';
import {
	FirstLevelMenuItem,
	MenuItem,
	PageItem,
} from '../../../interfaces/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { firstLevelMenu } from '../../../helpers/helpers';
import { motion } from 'framer-motion';

export function Menu() {
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();

	const pathname = usePathname();

	const [activeCategory, setActiveCategory] = useState(0);
	const [menuState, setMenuState] = useState<MenuItem[]>([]);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	const variants = {
		visible: {
			marginBottom: 20,
			transition: true
				? {}
				: {
						when: 'beforeChildren',
						staggerChildren: 0.1,
				  },
		},
		hidden: { marginBottom: 0 },
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'max-content',
			marginBottom: 10,
		},
		hidden: { opacity: 0, height: 0, marginBottom: 0 },
	};

	useEffect(() => {
		async function fetchMenu() {
			const menuData = await getMenu(activeCategory);

			setMenuState(menuData);
		}

		fetchMenu();
	}, [activeCategory]);

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menuState.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						setAnnounce(m.isOpened ? 'closed' : 'opened');
						m.isOpened = !m.isOpened;
					}
					return m;
				}),
			);
	};

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map((m, i) => (
					<li key={m.route}>
						<Link
							href={`/${m.route}`}
							onClick={() => setActiveCategory(i)}
						>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]:
										m.id === activeCategory,
								})}
							>
								{m.icon}
								<span className={cn(styles.menuCursor)}>
									{m.name}
								</span>
							</div>
						</Link>
						{m.id === activeCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menuState.map((m) => {
					if (
						m.pages
							.map((p) => p.alias)
							.includes(pathname.split('/')[2])
					) {
						m.isOpened = true;
					}
					return (
						<li key={m._id.secondCategory}>
							<button
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(
										key,
										m._id.secondCategory,
									)
								}
								className={cn(styles.secondLevel, {
									[styles.secondLevelActive]: m.isOpened,
								})}
								onClick={() =>
									openSecondLevel(m._id.secondCategory)
								}
								aria-expanded={m.isOpened}
							>
								{m._id.secondCategory}
							</button>
							<motion.ul
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={styles.secondLevelBlock}
							>
								{buildThirdLevel(
									m.pages,
									menuItem.route,
									m.isOpened ?? false,
								)}
							</motion.ul>
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpened: boolean,
	) => {
		return pages.map((p) => (
			<motion.li
				key={p._id}
				variants={variantsChildren}
			>
				<Link
					href={`/${route}/${p.alias}`}
					tabIndex={isOpened ? 0 : -1}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]:
							`/${route}/${p.alias}` === pathname,
					})}
					aria-current={
						`/${route}/${p.alias}` === pathname ? 'page' : false
					}
				>
					{p.category}
				</Link>
			</motion.li>
		));
	};

	return (
		<nav
			className={styles.menu}
			role="navigation"
		>
			{announce && (
				<span
					role="log"
					className="visualyHidden"
				>
					{announce === 'opened' ? 'развернуто' : 'свернуто'}
				</span>
			)}
			{buildFirstLevel()}
		</nav>
	);
}
