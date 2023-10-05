'use client';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = '/search';

	const goToSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (!search.length) return;

		const params = new URLSearchParams(searchParams);
		params.set('query', search);
		const p = params.toString();

		router.push(`${pathname}?${p}`);
	};

	return (
		<form
			className={cn(className, styles.search)}
			{...props}
			role="search"
		>
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				// onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
					goToSearch(e)
				}
				aria-label="Искать по сайту"
			>
				<Image
					src={'/glass.svg'}
					alt={'glass icon'}
					width={15}
					height={15}
				/>
			</Button>
		</form>
	);
};
