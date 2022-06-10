import React from "react";

function Navbar(){
        return(
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SHOPPING</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Today's Deal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Upcomings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customer Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Best Sellers</a>
        </li>
        <form className="d-flex input-group w-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
            </section>
           
        )
    }
export default Navbar