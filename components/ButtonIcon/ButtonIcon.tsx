import styles from './ButtonIcon.module.css';
import { ButtonIconProps } from './ButtonIcon.props';
import Image from 'next/image';
import cn from 'classnames';

export const ButtonIcon = ({
	appearance,
	icon,
	className,
	...props
}: ButtonIconProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.white]: appearance == 'white',
			})}
			{...props}
		>
			<Image
				src={`/${icon}.svg`}
				alt={`${icon}`}
				width={icon === 'menu' ? 20 : 12}
				height={icon === 'menu' ? 17 : 12}
			/>
		</button>
	);
};
