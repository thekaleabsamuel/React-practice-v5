import React from "react";

function Header (props) {
    console.log(props);
    return  <h1>Hello there indeed , {props.title}, {props.color}</h1>;
    
    ;
}

export default Header;