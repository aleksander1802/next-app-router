'use client';

import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Image from 'next/image';
import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	// const [isOpened, setIsOpened] = useState<boolean>(false);

	const shouldReduceMotion = useReducedMotion();

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: shouldReduceMotion ? 1 : 0,
			x: '100%',
		},
	};

	return (
		<header
			className={cn(className, styles.header)}
			{...props}
		>
			<Image
				src={'/logo.svg'}
				alt={'logo'}
				width={159}
				height={44}
				className={styles.logo}
			/>

			{/* <motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'opened'}
				animate={isOpened ? 'opened' : 'closed'}

			>
				<Sidebar />
			</motion.div> */}
		</header>
	);
};
