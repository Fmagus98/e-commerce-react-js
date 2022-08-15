import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function NavBar() {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container m-0">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={require("../../img/aguila.png")} alt=""className="bi me-2" width="40" height="32" role="img"></img>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center  mb-md-0">
                        <li><a href="#1" className="nav-link px-2 link-secondary">index</a></li>
                        <li><a href="#4" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5" role="search">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                    </form>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#3" className="nav-link px-2 link-dark">Shopping cart</a></li>
                        </ul>

                    <div className="dropdown text-end">
                    <a href="#5" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={require("../../img/usuario.png")} alt="mdo" width="32" height="32" className="rounded-circle"></img>
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="#6">My shopping</a></li>
                            <li><a className="dropdown-item" href="#8">Profile</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#9">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
 export default NavBar;



/* 
 // <nav id="nav">
        //     <picture className="logo">
        //     <img src={require("../../img/aguila.png")} alt=""></img>
        //     <p> shared</p>
        //     </picture>
        //     <ul>
        //         <li><a href="index.html">index</a></li>
        //         <li><a href="#category">category</a></li>
        //         <li><a href="#shopping cart">Shopping cart</a></li>
        //         <li><a href="#contact">contact</a></li>
        //     </ul>
        // </nav> */