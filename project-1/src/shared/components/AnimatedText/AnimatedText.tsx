import './AnimatedText.css'

export const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <span className="animatedText" aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word"
          style={{ animationDelay: `${delay + i * 0.12}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  )
}
