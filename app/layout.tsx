import { Header } from '@/components/layoutComponents/Header/Header';
import styles from './Layout.module.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Sidebar } from '@/components/layoutComponents/Sidebar/Sidebar';
import { Footer } from '@/components/layoutComponents/Footer/Footer';
import { Up } from '@/components';
import Provider from '@/components/Provider/Provider';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import './globals.css';

const inter = Noto_Sans({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic', 'latin'],
	style: ['normal'],
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
		<html lang="ru">
			<body className={inter.className}>
				<Provider>
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
						<ThemeSwitcher />
					</div>
				</Provider>
			</body>
		</html>
	);
}
