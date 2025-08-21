// src/pages/productsLoader.js
export async function productsLoader() {
  const res = await fetch('/fake-endpoint'); // wrong URL
  if (!res.ok) {
    throw new Response('Failed to fetch products', { status: 500 });
  }
  return res.json();
}
