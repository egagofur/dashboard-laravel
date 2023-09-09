import { Button } from '@/components/button';
import { Icon } from './icon';

export function ThemeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none');
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        }, 0);
    }

    function toggleMode() {
        disableTransitionsTemporarily();

        const darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );
        const isSystemDarkMode = darkModeMediaQuery.matches;
        const isDarkMode = document.documentElement.classList.toggle('dark');

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode;
        }
    }

    return (
        <Button
            size="icon"
            variant="outline"
            className="rounded-full"
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleMode}
        >
            <Icon name="IconSun" className="dark:hidden" />
            <Icon
                name="IconMoonStars"
                className="hidden dark:block text-yellow-300"
            />
        </Button>
    );
}
