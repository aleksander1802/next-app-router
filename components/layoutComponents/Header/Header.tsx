'use client';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon';
import Link from 'next/link';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsOpened(false);
	}, [pathname]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	};

	return (
		<header
			className={cn(className, styles.header)}
			{...props}
		>
			<Link href={'/'}>
				<Image
					src={'/logo.svg'}
					alt={'logo'}
					width={159}
					height={44}
					priority
				/>
			</Link>
			<ButtonIcon
				appearance="white"
				icon="menu"
				onClick={() => setIsOpened(true)}
			/>
			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar />
				<ButtonIcon
					className={styles.menuClose}
					appearance="white"
					icon="close"
					onClick={() => setIsOpened(false)}
				/>
			</motion.div>
		</header>
	);
};
