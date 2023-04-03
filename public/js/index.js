 import { addproduct } from "./addProduct";
 import '@babel/polyfill'
 

 document.querySelector('.form--login').addEventListener('submit',e=>{
    e.preventDefault();
    
   const productId=document.getElementById('productId').value;
   const name=document.getElementById('name').value;
   const price=document.getElementById('price').value;
   const featured=document.getElementById('featured').value;
   const rating=document.getElementById('rating').value;
   const createdAt=document.getElementById('createdAt').value;
   const company=document.getElementById('company').value;
   addproduct(productId,name,price,featured,rating,createdAt,company);
   //console.log(productId,createdAt);
 })
