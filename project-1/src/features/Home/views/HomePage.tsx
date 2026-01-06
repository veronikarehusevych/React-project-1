import Navbar from './Navbar.tsx'
import '../styles/HomePage.css'
import SubHeader from './SubHeader.tsx'

export const HomePage = () => {
  return (
    <div className={'homepage'}>
      <Navbar />
      <SubHeader />
    </div>
  )
}
