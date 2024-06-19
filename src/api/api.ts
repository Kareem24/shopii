// Your api logic goes here

//e

export async function fetchProducts(query: string) {
  if (!query) return;

  const url = `https://real-time-product-search.p.rapidapi.com/search?q=${query}&country=us&language=en`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '264a960087mshe826c34d02f3a77p1932b2jsn5915d1167be9',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);

  return await response.json();
}