import React from "react";
import { createGlobalStyle } from "styled-components";

const GLobalStyling = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  background:#1b1b1b;
  font-family: 'Inter',sans-serif;
}
button{
  font-weight: bold;
  padding:1rem 2rem;
  border: 3px solid #23d997;
  font-size:1.1rem; 
  cursor:pointer;
  background:transparent;
  color:#ffffff;
  font-family: 'Inter',sans-serif;
  transition: all .3s ease;
  &:hover{
    background: #23d997;
  }&:focus{
    outline:none;
  }
}
h2{
  font-weight:lighter;
  font-size:4rem;
}
h3{
  color:#ffffff;
}
h4{
  font-weight:bold;
}
span{
  font-weight:bold;
  color:#23d997;
}
p{
  color:#ccc;
  padding:3rem 0rem;
  font-size:1.4rem;
}

`;

export default GLobalStyling;
