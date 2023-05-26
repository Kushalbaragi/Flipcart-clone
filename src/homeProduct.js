import React from 'react'
import Card from './card'
import lists from './database/products'

function HomeProduct() {
    let {products}=lists;
    let productLists=products.slice(0,8);
  return (
    <section className='listWrapper'>
    <h3>Recmended product just for you</h3>
    <div className='cards-wrapper'>
    {
        productLists.map(item=>{
            return <Card key={item.id} product={item}/>
        })
    }
    </div>
    <div className='home-btn-wrapper'><button className='showMore'>Show more products</button></div>
    </section>
  )
}

export default HomeProduct