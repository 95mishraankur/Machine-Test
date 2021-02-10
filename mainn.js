
//const cartitam=document.querySelector("#cartitam")
const productDOM=document.querySelector(".product-center")




async function fetching(url) {
    const value=await fetch(url);
    return value.json();
  }
fetching('https://jsonplaceholder.typicode.com/photos')
.then(data=>
    { const users=data;
    console.log(users);
    let result='';
        
            users.forEach(user => {
          
              
             result+=`<article class="product">
             <div class="productParent" style="padding:10px;margin:10px;" >
             <div class="img-container">
              <img src=${user.url}  height=150px width=150px class="product-img" />
              <p style="color:blue; font-size:20px;">Product Name</p>
               <p style="color:756d64" class="text">${user.title}</p> 
            
             
             </div>
             </div>
        
    
          </article>
              `;  

           
        })
         
       
        productDOM.innerHTML=result;
     
      })
