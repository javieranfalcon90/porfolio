import {experiences} from "../cv.json"
import Exp from "./subcomponents/Exp"


function Experience(){


	return(
		<>
			<section id="experiences-section" className="container pt-5 pb-5 ">
				<div className="col-8 mx-auto my-2">

					<h2>Experiencias Laborales</h2>
					{experiences.map((item, index) => {
						return (<Exp key={index} item={item} />);
				    })}

						
					

				</div>

			</section>
		</>
	);
}

export default Experience;