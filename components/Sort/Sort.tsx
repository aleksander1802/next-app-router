import { SortEnum, SortProps } from './Sort.props';
import cn from 'classnames';
import Image from 'next/image';
import styles from './Sort.module.css';

export const Sort = ({
	sort,
	setSort,
	className,
	...props
}: SortProps): JSX.Element => {
	return (
		<div
			className={cn(styles.sort, className)}
			{...props}
		>
			<div
				className={styles.sortName}
				id="sort"
			>
				Сортировка
			</div>
			<button
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating,
				})}
				aria-labelledby="sort rating"
			>
				<Image
					className={styles.sortIcon}
					width={20}
					height={13}
					src={'/sort.svg'}
					alt={'sort'}
				/>
				По рейтингу
			</button>
			<button
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price,
				})}
				aria-labelledby="sort price"
			>
				<Image
					className={styles.sortIcon}
					width={20}
					height={13}
					src={'/sort.svg'}
					alt={'sort'}
				/>
				По цене
			</button>
		</div>
	);
};
