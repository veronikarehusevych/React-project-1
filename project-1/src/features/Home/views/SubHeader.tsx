import '../styles/SubHeader.css'
import { SlideTextButton } from '../../../shared/components/SlideTextButton/SlideTextButton.tsx'

const SubHeader = () => {
  return (
    <div className={'subheader-wrapper'}>
      <div className="title-wrapper">
        <h1 className={'title'}>Run your freelance business like a pro</h1>
      </div>
      <div className="subtitle-wrapper">
        <span className={'subtitle'}>
          All-in-one platform for managing clients, projects, and payments without the chaos. From
          first contract to final invoice, we’ve got your back.
        </span>
      </div>
      <div className="subtitle-buttons">
        <SlideTextButton text={'Try Dreelio free'} theme={'dark'} />
        <SlideTextButton text={'See features'} theme={'light'} />
      </div>
    </div>
  )
}

export default SubHeader
