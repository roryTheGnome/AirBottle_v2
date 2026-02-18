import React from "react";
import {useGetProductsQuery} from "./ProductsApi";
import Card from "./Card";

function ProductsList(){
    const {data, error, isLoading}=useGetProductsQuery();

    if(isLoading)return <p>Loading ...</p>;

    if(error)return<p>There is a problem with data fetching!!</p>;//find a decent message here
    const products = data?.products ?? [];
    console.log(data);//delete before submiting

    return(
        <div className="market">
            {data.products.map((product)=>(
                <Card key={product.id}
                      description={product.product_description}
                      pId={product.id}
                    pName={product.product_name}
                      aquality={product.air_quality}
                      tones={product.air_tones}/>
            ))}
        </div>
    );
}

export default ProductsList