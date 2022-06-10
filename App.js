import React, { useState } from 'react';
import './App.css';
import './Loginstyle.css'
import Navbar from './ecommerce/Navbar';
import Productdetails from './ecommerce/Productdetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './ecommerce/Footer';
import Productdescription from './ecommerce/Productdescription';
import Home from './ecommerce/Home';
import Categories from './ecommerce/Category';
import Cart from './ecommerce/Cart';
function App() {
  const [currentPage,setCurrentPage] = useState(1);
  const[postPerPage,setPostPerPage]=useState(10);

  return (
    <div className="App">
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Productdetails />} />
          <Route path="/products" element={<Productdetails />} />
         <Route path="/category/:id" element={<Categories />} />
         <Route path='/cart' element={<Cart />}/>
          <Route path="/products/:id" element={<Productdescription />} /> 
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}


 export default App;

// function App() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//       <div className="text-center">
//       <h2>Sign In</h2>
//       </div>
//         <div className="input-container">
//           <label className="form-groups">Username </label>
//           <br></br>
//           <input type="text" className="form-control" placeholder="Username" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label className="form-groups" >Password </label>
//           <br></br>
//           <input type="password" className="form-control" placeholder=
//           "Password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" className="btn btn-success"/>&nbsp;
//           <input type="reset" className="btn btn-danger"/>          
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         {isSubmitted ? 
//           <Router>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Productdetails />} />
//               <Route path="/products" element={<Productdetails />} />
//               <Route path="/category" element={<Categories />} />
//               <Route path="/products/:id" element={<Productdescription />} />
//               <Route>404 Not Found!</Route>
//             </Routes>
//             <Footer />
//           </Router>
//         : renderForm}
//       </div>
//     </div>
//   );
// }

// export default App;
