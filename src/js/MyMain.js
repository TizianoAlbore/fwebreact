import React from 'react';

// class MyMain extends React.Component{
// constructor(props){
//     super(props);
//     const lista = this.props.menu.map((item)=><li>{item}</li>)
// }

// render(){
//     return(
// <div>
//             <h1>Il nostro menu'</h1>
//             <ul>{this.lista}</ul>
//         </div> );
// }

// }

function MyMain(props){
    const menu = props.menu;
    const lista = menu.map((item)=>
    <li key={item.toString()} className="row border-dark border-bottom">
        {item}
        </li>
        );
    return(
    <div>
        <h1>Il nostro menu'</h1>
        <ul>{lista}</ul>
    </div> ); 
}

export default MyMain;