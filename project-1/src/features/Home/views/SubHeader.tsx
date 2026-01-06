import '../styles/SubHeader.css'
import { SlideTextButton } from '../../../shared/components/SlideTextButton/SlideTextButton.tsx'
import { AnimatedText } from '../../../shared/components/AnimatedText/AnimatedText.tsx'

const SubHeader = () => {
  return (
    <div className={'subheader-wrapper'}>
      <h1 className="title-wrapper">
        <AnimatedText text={'Run your freelance business like a pro'} />
      </h1>
      <div className="subtitle-wrapper">
        <AnimatedText
          text={
            'All-in-one platform for managing clients, projects, and payments without the chaos. From\n' +
            'first contract to final invoice, we’ve got your back.'
          }
          delay={1}
        />
      </div>
      <div className="subtitle-buttons">
        <SlideTextButton text={'Try Dreelio free'} theme={'dark'} />
        <SlideTextButton text={'See features'} theme={'light'} />
      </div>
    </div>
  )
}

export default SubHeader
