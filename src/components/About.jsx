import {basics} from "../cv.json"
import image from "/DV.jpg"


function About(props){
	return (
		<>

			<section id="home-section" className="container d-flex flex-column justify-content-center ">
				<div className="col-md-8 col-sm-12 mx-auto">

					<figure className="col-3">
						<img className="w-50" src={image}/>
					</figure>

					<h2>Hola, soy {basics.name}</h2>
					<h4>{basics.label}</h4>
					<span>{basics.summary}</span>

					<div className="flex flex-wrap mt-4">
						<a className="btn btn-sm btn-outline btn-secondary me-3">Contactame</a>
						<a className="btn btn-sm btn-outline btn-secondary me-3">CV</a>
						<a className="btn btn-sm btn-outline btn-secondary me-3">Linkedin</a>
						<a className="btn btn-sm btn-outline btn-secondary me-3">Github</a>
					</div>

				</div>
			</section>













		</>
	);
}

export default About;