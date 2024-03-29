import { Link } from "react-router-dom"

function HeaderBackBtn() {
    return (
        <header className="header">
            <img className="header-logo" src="/icons8-lavender-96.png" alt="Logo" />
            <h1 className="header-title">Healing Pages.</h1>
            <Link to="/" className="link-btn-container">
                <button className="link-btn">Home</button>
            </Link>
        </header>
    )
}
export default HeaderBackBtn

