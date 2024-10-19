import NavBar from "./NavBar";



const Header = () => {
    return (
        <div className="container-fluid py-5">
            <div className="w-75">
                <h1>Wizard app</h1>
                <NavBar/>
            </div>
        </div>
    )
}

export default Header;