import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				<h1>HOLA</h1>
				<div className="col-12 md-6">

					<input placeholder="que quieres hacer?"></input>

				</div>

			</div>
			
		</div>
	);
};

export default Home;
