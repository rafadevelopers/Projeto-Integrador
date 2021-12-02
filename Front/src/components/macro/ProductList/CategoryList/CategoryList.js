import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../ProductList'
import './CategoryList.css'



function CategoryList(props) {
    
    const categories = props.categories || []
    console.log(categories)
    return(
        <>
{
        categories.map((Home) =>{
            console.log(Home)
            return (
                <>
                 <div className="container destaques">
                <h2 className="destaques"><Link to={"/products/category/" + Home.category.id}>{Home.category}</Link></h2>
                <div class="row row-col-sm-12 row-cols-md-2 row-cols-xl-4 g-4">
                    <ProductList produtos={Home.product}/>
                </div>
                </div>
            </>
            )
        })
        }
        </>
    )
}

export default CategoryList