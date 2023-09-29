import React from 'react'
import PropTypes from 'react'
// import { Link } from 'react-router-dom'
function Home(props) {
  return (
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.Abouttext}</Link>
        </li>*/}
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
  <input class="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault" >Enable Darkmode</label>
</div>
    </div>
  </div>
</nav>
</>
  )
}
Home.propType={
  title:PropTypes.string,
  Abouttext:PropTypes.string,
}

export default Home
