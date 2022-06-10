import React from "react";
import './footer.css';

function Footer() {
    return (
        <div class="footer-bottom">
            <p>copyright &copy;2021 <a href="#">ShoppingCart</a>  </p>
            <div class="footer-menu">
                <ul class="f-menu">
                    <li><a href="./Productdetails.js">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer