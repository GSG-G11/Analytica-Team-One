import productObject from '../assets/js/data.js';

const pName = document.querySelector("#name");
const pDescription = document.querySelector("#description");
const pCategory = document.querySelector("#category");
const pPhoto = document.querySelector("#photo");
const pPrice = document.querySelector("#Price");
const PSubmit = document.querySelector("#submit");
const pForm = document.getElementById("form")

let arr=[...productObject];

//add new object to array include the new product detailes

const addProduct = (ev)=> {
    ev.preventDefault(); 
    let product={
        id : Date.now(),
        name : pName.value,
        price : pPrice.value,
        category : pCategory.value,
        description : pDescription.value,
        imgUrl : pPhoto.value
    }

    arr.push(product);
    pForm.reset();
    // console.log(arr);
}

PSubmit.addEventListener('click', addProduct)
