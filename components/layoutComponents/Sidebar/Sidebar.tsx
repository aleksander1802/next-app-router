'use client';

import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { Menu } from '../Menu/Menu';
import { Search } from '@/components/Search/Search';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div
			className={cn(className, styles.sidebar)}
			{...props}
		>
			<Image
				src={'/logo.svg'}
				alt={'logo'}
				width={159}
				height={44}
				className={styles.logo}
				priority
			/>
			<Search />
			<Menu />
		</div>
	);
};
