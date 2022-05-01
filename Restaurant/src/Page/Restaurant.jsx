import axios from 'axios';
import {useState,useEffect} from 'react';
import './Restaurant.css';
import Data from './data.json';

//import {v4 as uuid} from 'uuid';



function Restaurant(){

   

   
    const handlechange = (e)=>{
     
         //var selected= document.getElementById("sort").value;
        //console.log(selected);
const {value} = e.target;
console.log(value);
    }
       
 //const new_arr = Data.filter((element)=>{
  //  return ((element.id < value+1) && (element.id >= value));
//
    
//})

//console.log(new_arr);



       
    


//var key_value = uuid();


   return(
       <>
       <div id='box'>
           <div id='heading'>
<h1>Restaruant Chart</h1>
           </div>

           <div id='sort_box'>
           <form>
           <select id='sort'  onChange={handlechange}  >
            <option key={0} value="Sort">Sort</option> 
            <option key={1} value="4">4+ Star</option>
            <option key={2} value="3">3+ Star</option>
            <option key={3} value="2">2+ Star</option>
            <option key={4} value="1">1+ Star</option>
        </select>
</form>
           </div>
          <div id='posts'>
{Data.data.map(post => {
    return(
        <div id='div'>

        <img alt='' src={post.imgURL}></img>
        <div>
            <h4 id='title'>{post.title}</h4>
            <h6>{post.Cusine}</h6>
            <h6>Cost for One is ₹ {post.sellingPrice}</h6>
            <h6>It takes{post.time}</h6>
            <div id='rating'>
            <h4 id='id'>{post.id}</h4>
            </div>
            <div id='button'>
            <button>Order Online </button>
            </div>
        </div>
        </div>
    )
})}
          </div>

       </div>
       
       </>
   )
}
Restaurant();


export default Restaurant;