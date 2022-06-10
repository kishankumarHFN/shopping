import React from "react";
const shoot = () => {
    alert("Great Shot!");
  }

class Home extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
		<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "container-fluid">
			{/* <h1> Displaying Products for </h1>  */}
               { 
				items.map((item) => (
                    <div className="container p-5 my-5 bg-secondary text-white">
				<ol key = { item.id } >
					<b>Title</b>: { item.title },<br></br>
					Price: { item.price },<br></br>
					Description: { item.description },<br></br>
          Image:{item.image},<br></br>
          <button onClick={shoot}>Take the shot!</button>
          </ol>
          </div>
				))
			}
		</div>
	);
}
}

export default Home;
