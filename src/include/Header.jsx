import {Outlet, Link} from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav className="mb-2">
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/container" className="nav-link">Bootstrap-Container</Link></li>
                    <li className="nav-item"><Link to="/typo" className="nav-link">Typographic</Link></li>
                    <li className="nav-item"><Link to="/color" className="nav-link">Color</Link></li>
                </ul>
            </nav>
            <Outlet/> {/* 아웃렛은 선언하지 않으면 제대로 작동하지 않음! 여러 페이지 오가도 네비바 뜨게 하기 */}
        </>
    );
}

export default Header;