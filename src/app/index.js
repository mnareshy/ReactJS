import React from "react";
import { render } from "react-dom"

class SampleApp extends React.Component{
	
	render(){
		

	 return(
		
		<div className="container">
		
			<div className="row">
			
				<div className="col-xs-10 col-xs-offset-1">
				
				</div>
			
			
			</div>
			
			<h1>Sample App - SaiRam </h1>
		
		</div>
		);
	}
}

render(<SampleApp/>, window.document.getElementById("sampleapp"));
 
console.log("test - sairam")


