import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";


function Productdetails() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {	
				setPosts(data) // new
			})
	}, [])
	// const [data,setData] =useState(Categories)
	// const filterResult =(catItem)=>{
	// 	const result=categories.filter((curData)=>{
	// 		return curData.category===catItem;
	// 	});
	// 	setData(result);
	// }
	// 	return(
	
	// 		<div className="text-centre text-info">
	// 		<div className="container-fluid mx-2">
	// 		<div className="col-md-3">
	
	// 		<button className="btn btn-primary w-100 mb-4" onclick={()=>filterResult('mens clothing')}>Men</button>
	// 		<button className="btn btn-primary w-100 mb-4">WOMEN</button>
	// 		<button className="btn btn-primary w-1mm mb-4">Grossery</button>
	// 		</div>
	// 		</div>
	// 		</div>
	
	// 	)
	

	return (
		<div className = "ui grid container" style={{width:"20%",height:"10%",textDecoration:"none"}}>
			
               { 
				posts.map((item) => (
					<div className="card">
                    <div className="card h-100 text-center p-4">
				<ol key = { item.id } >
				 <Link to={`/item/${item.id}`}>
				 <div className="image"><img src={item.image} className="card-img-top" alt="image err"></img></div>
				 <div className="content">
				 <div className="header" style={{textDecoration:"none"}}>
					<h4 className="card-title mb-4">{ item.title }</h4>
					<h4 className="card-text">${ item.price }</h4>
					</div>
					 {/* { item.description } */}
					 </div>
				</Link>
                    
          </ol>
		  </div>
          </div>
		 
				))
			}
			
		</div>
	)
}
export default Productdetails


  