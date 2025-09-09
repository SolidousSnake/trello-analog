import SwitchThemeButton from '../components/SwitchThemeButton';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-primary bg-gradient text-white p-3 w-100" style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="h4 mb-0 text-decoration-none">
                    Trello analog
                </Link>
                <SwitchThemeButton />
            </div>
        </header>

    );
}
