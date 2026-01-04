import '../styles/SubHeader.css'

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
    </div>
  )
}

export default SubHeader
