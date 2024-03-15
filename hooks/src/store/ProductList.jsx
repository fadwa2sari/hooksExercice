import React, { useEffect, useState } from "react"
import ProductItem from "./ProductItem";


export default function ProductList() {
 
      const [productlist , setProductlist] = useState([]);
       const [inputvalue , setInputValue] = useState("");
       const[categoreilist,setCategoreilist]= useState([]);
       const [CurrentCateg , setCurrentcat] = useState([]);

       const  displayCategories = ()=>{
             return categoreilist.map((category ,key)=>
             {
                return <button key={key} className={'btn'+(CurrentCateg === category? 'btn-primary' : 'btn-secondary')}
                onClick={(e)=>{
                    e.preventDefault();
                    setCurrentcat(category)
                }}>
                     {category}</button>
             })
       }



     const displayproducts = () =>{
      
       
                const producTemp = productlist.filter(product => {
                return  product.title.includes(inputvalue) || product.description.includes(inputvalue) || product.id.toString().includes(inputvalue)
            })
    
        // if(CurrentCateg !=undefined)
        // {
        //     producTemp.filter(product =>{
        //         return product.category === CurrentCateg}
        //     )
        // }

        if(productlist.length > 0)
        {
            
               return producTemp?.map((product,i )=>{
               return  <ProductItem  product={product} key={i} />
        })
         }

         return (<tr><td colSpan={7}> No items</td></tr>)
     }



    const getProduct = ()=>{
       fetch('https://fakestoreapi.com/products')
        .then(response => response.json()).then(response => setProductlist(response))
    }

    const getcategorie = ()=> {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(response => setCategoreilist(response))
    }

   
     const hanlsearch =(e)=>{
       e.preventDefault();
       const serachValue = document.querySelector('#serach').value
       setInputValue(serachValue)
        }

     useEffect(()=>{
        getProduct()
        getcategorie()
        
     },[])
    return(
        <div className="container-fluid mx-auto w-75 my-3">
            <h2> search</h2>
              <form>
              <div className="mb-3">
                   <label>serach here</label>
                   <input type="text" id="serach" className="form-control form-control-sm"  />
              </div>
             <input type="submit" value="search" className="btn btn-primary" onClick={hanlsearch}/>
             <hr />
             <div className="container-fluid mx-auto w-75 my-3">
             <h5>Categories :</h5>
              <div className="btn-group">
               
                 {displayCategories()}</div>
               </div>
              </form>


<hr />

        <h1>Liste de Produits </h1>
        <table className="table table-hover">
        <thead>
        <tr className="table-dark">
           <td >#Id</td>
           <td>Tiltle</td>
           <td >price</td>
           <td >Description</td>
           <td >Categorie</td>
           <td >Image</td>
           <td>Rating</td>
          
         </tr>
         </thead>
         <tbody>
           {
            displayproducts()
           }
         </tbody>
           </table>
          
        </div>
    )

}