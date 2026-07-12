import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className={`theme-toggle__thumb${theme === 'dark' ? ' is-dark' : ''}`} />
      </span>
      <span className="theme-toggle__label">{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
