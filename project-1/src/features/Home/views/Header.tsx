import logo from '../../../assets/logo.svg';
import '../styles/Header.css';

export const Header = () => {
    return (
        <div className={'header'}>
            <img src={logo} className="logo" alt="App Logo" />
            Dreelio
        </div>
    )
}