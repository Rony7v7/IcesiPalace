import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className="header" class="navBar">
            <nav>
                <ul className="navLinks">
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;