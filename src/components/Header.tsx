import NavBar from "./NavBar";



const Header = () => {
    return (
        <div className="container-fluid py-2">
            <div className="row g-4">
                <h1 className="text-center">Wizard app</h1>
                <div className="float-end">
                    <NavBar/>
                </div>
            </div>
        </div>
    )
}

export default Header;