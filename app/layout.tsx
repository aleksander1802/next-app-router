import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
