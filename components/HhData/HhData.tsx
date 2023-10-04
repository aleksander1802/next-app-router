import { HhDataProps } from './HhData.props';
import { priceRu } from '../../helpers/helpers';
import { Card } from '../Card/Card';
import Image from 'next/image';
import styles from './HhData.module.css';

export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>
						{priceRu(juniorSalary)}
					</div>
					<div className={styles.rate}>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>
						{priceRu(middleSalary)}
					</div>
					<div className={styles.rate}>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>
						{priceRu(seniorSalary)}
					</div>
					<div className={styles.rate}>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
						<Image
							src={'/rate_filled.svg'}
							alt={'star-rating icon'}
							width={20}
							height={20}
						/>
					</div>
				</div>
			</Card>
		</div>
	);
};
