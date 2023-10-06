'use client';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import { useState } from 'react';
import { postReview } from '@/api/review';
import Image from 'next/image';

export const ReviewForm = ({
	productId,
	isOpened,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { message } = await postReview({ formData, productId });

			if (message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className={cn(styles.reviewForm, className, {
					[styles.isOpen]: !isOpened,
				})}
				{...props}
			>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' },
					})}
					placeholder="Имя"
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.name ? true : false}
				/>
				<Input
					{...register('title', {
						required: {
							value: true,
							message: 'Заполните заголовок',
						},
					})}
					placeholder="Заголовок отзыва"
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.title ? true : false}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: {
								value: true,
								message: 'Укажите рейтинг',
							},
						}}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: {
							value: true,
							message: 'Заполните описание',
						},
					})}
					placeholder="Текст отзыва"
					className={styles.description}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
					aria-label="Текст отзыва"
					aria-invalid={errors.description ? true : false}
				/>
				<div className={styles.submit}>
					<Button
						appearance="primary"
						tabIndex={isOpened ? 0 : -1}
						onClick={() => clearErrors()}
					>
						Отправить
					</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную
						модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div
					className={cn(styles.success, styles.panel)}
					role="alert"
				>
					<div className={styles.successTitle}>
						Ваш отзыв отправлен
					</div>
					<div>
						Спасибо, ваш отзыв будет опубликован после проверки.
					</div>
					<button
						onClick={() => setIsSuccess(false)}
						className={styles.close}
						aria-label="Закрыть оповещение"
					>
						<Image
							src={'/close.svg'}
							alt={'close button'}
							width={12}
							height={12}
						/>
					</button>
				</div>
			)}
			{error && (
				<div
					className={cn(styles.error, styles.panel)}
					role="alert"
				>
					Что-то пошло не так, попробуйте обновить страницу
					<button
						onClick={() => setError(undefined)}
						className={styles.close}
						aria-label="Закрыть оповещение"
					>
						<Image
							src={'/close.svg'}
							alt={'close button'}
							width={12}
							height={12}
						/>
					</button>
				</div>
			)}
		</form>
	);
};
