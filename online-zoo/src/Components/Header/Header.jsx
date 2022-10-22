import s from './Header.module.css';
import SwitchButton from './SwitchButton/SwitchButton';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`containerSite ${s.containerHeader}`}>
                <div className={s.logoHeader}>
                    <h1 className={s.paragraphLogo}>
                        zoo <span>online</span>
                    </h1>
                </div>
                <nav className={s.containerNavHeader}>
                    <a href="#">About</a>
                    <a href="#">Zoos</a>
                    <a href="#">Map</a>
                    <a href="#">Contact</a>
                </nav>
               <SwitchButton />
            </div>
        </header >
    )
};

export default Header;