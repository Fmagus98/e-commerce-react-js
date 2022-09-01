import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"
import { useState } from "react"

function NavBar({ countCart }) {

    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        if(e.target.value.length>0)
        setSearch(e.target.value)
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img className="navbar-brand bi me-2" src="/assets/img/aguila.jpg" alt="" width="40" height="55" role="img"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    < div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                            <Link className="nav-item" to={"/"}><li className="nav-link text-white">Home</li></Link>
                            <Link className="nav-item" to={"/category/Motherboard"}><li className="nav-link text-white">MotherBoard</li></Link>
                            <Link className="nav-item" to={"/category/GraphicsCard"}><li className="nav-link text-white">Graphics card</li></Link>
                            <Link className="nav-item" to={"/category/MemoryRam"}><li className="nav-link text-white">Memory RAM</li></Link>
                        </ul>
                        <form className="d-flex col-6" role="search">
                            <input className="form-control me-4" type="search" placeholder="Search products..." aria-label="Search" onChange={handleChange}></input>
                            <Link to={`/search/${search}`}><button className="btn btn-outline-light" type="submit">Search</button></Link>
                        </form>
                        <CartWidget counter={countCart} />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;


