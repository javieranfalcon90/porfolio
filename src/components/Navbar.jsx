function Navbar(){
	return (

		<>
			<nav className="navbar navbar-light navbar-expand-lg fixed-top justify-content-center">
			    <div className="nav justify-content-center">
			        <div id="navcol-1" className="collapse navbar-collapse flex-grow-0">
			            <ul className="navbar-nav text-center">
			                <li className="nav-item"><a className="nav-link" href="#">Sobre Mi</a></li>
			                <li className="nav-item"><a className="nav-link" href="#educations-section">Educacion</a></li>
			                <li className="nav-item"><a className="nav-link" href="#experiences-section">Experiencia</a></li>
			                <li className="nav-item"><a className="nav-link" href="#projects-section">Proyectos</a></li>
			            </ul>
			        </div>
			    </div>
			</nav>

		</>

	)
}

export default Navbar;