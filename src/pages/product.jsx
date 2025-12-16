import React, { useEffect, useState } from 'react'

const Product = () => {
    const [Product, setProduct] = useState([]);
    const getProduct = async () => {
        try {
            const requset = await fetch("https://dummyjson.com/product")
            const response = await requset.json()
            setProduct(response.products)
            console.log(response.products)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className='flex flex-wrap justify-center items-center gap-5'>
                {Product.map(item => (
                    <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={item.thumbnail}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product