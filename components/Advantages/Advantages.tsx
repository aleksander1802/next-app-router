import { AdvantagesProps } from './Advantages.props';
import Image from 'next/image';
import styles from './Advantages.module.css';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map((a) => (
				<div
					key={a._id}
					className={styles.advantage}
				>
					<Image
						src={'/check.svg'}
						alt={'check'}
						width={50}
						height={50}
					/>
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline} />
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};
