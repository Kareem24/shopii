import React, { useEffect } from 'react'
const query = 'hilfiger20%black20%shoe'

const url = `https://real-time-product-search.p.rapidapi.com/search?q=${query}&country=us&language=en`;
const options = {
method: 'GET',
headers: {
  'X-RapidAPI-Key': '264a960087mshe826c34d02f3a77p1932b2jsn5915d1167be9',
  'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
}
};
function Product() {
  const [datas, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const {data}= await response.json();
        setData(data)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
},[])

  return (
    <div className=' grid grid-cols-5 gap-8'>
      {datas?.map((el) => {
        return(<img src={el?.product_photos[0]} alt="" key={el.product_id} />)
        
      })}
    </div>
  )
}

export default Product
