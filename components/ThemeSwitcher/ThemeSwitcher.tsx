'use client';

import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className={cn(styles.icon, styles.yellow)}
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className={cn(styles.icon, styles.gray)}
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
