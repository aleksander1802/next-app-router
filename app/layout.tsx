import { Header } from '@/components/layoutComponents/Header/Header';
import './globals.css';
import styles from './Layout.module.css';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Sidebar } from '@/components/layoutComponents/Sidebar/Sidebar';
import { Footer } from '@/components/layoutComponents/Footer/Footer';
import { Up } from '@/components';

const inter = Noto_Sans({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic'],
	style: ['normal'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Next App Router',
	description: 'Practice with next app router',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={styles.wrapper}>
					<Header className={styles.header} />
					<Sidebar className={styles.sidebar} />
					<main
						className={styles.body}
						tabIndex={0}
						role="main"
					>
						{children}
					</main>
					<Footer className={styles.footer} />
					<Up />
				</div>
			</body>
		</html>
	);
}
