import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = ({
	error,
	className,
	...props
}: TextareaProps): JSX.Element => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea
				className={cn(styles.textarea, {
					[styles.error]: error,
				})}
				{...props}
			/>
			{error && (
				<span
					role="alert"
					className={styles.errorMessage}
				>
					{error.message}
				</span>
			)}
		</div>
	);
};
