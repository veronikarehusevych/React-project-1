import './SlideTextButton.css'

export const SlideTextButton = ({ text, theme }: { text: string; theme: 'light' | 'dark' }) => {
  return (
    <button className={`slide-text-button ${theme}`}>
      <span className="btn-swap__label">
        <span className="btn-swap__text btn-swap__text--top">{text}</span>
        <span className="btn-swap__text btn-swap__text--bottom">{text}</span>
      </span>
    </button>
  )
}
