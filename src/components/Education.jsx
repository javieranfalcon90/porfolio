import {education, skills} from "../cv.json"

function Education(){

	const skillsList = skills.map((item, index) => (
				        <span className="badge bg-secondary me-1"> {item} </span>
				    ));	


	return (
		<>
			<section id="educations-section" className="container pt-5 pb-5">
				<div className="col-8 mx-auto my-2">

					<h2>Educacion</h2>
					<span className="h4">{education.area}</span>
					<div className="float-end bold">
						{education.startDate} - {education.endDate}
					</div>
					<p>{education.institution}</p>
					


					<h2 className="mt-5">Habilidades</h2>
					<div className="flex">
					{skillsList}
					</div>
						
					

				</div>

			</section>
		</>
		);

}

export default Education;