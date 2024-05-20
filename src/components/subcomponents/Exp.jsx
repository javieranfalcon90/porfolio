function Exp(props){

	return(
		<>
						<div>
				        	<span className="h4">{props.item.job}</span>
				        	<div className="float-end">
								{props.item.startDate} - {props.item.endDate}
							</div>
							<h6>{props.item.company}</h6>
							<p>{props.item.description}</p>

				        </div>			
		</>
	);

}

export default Exp;