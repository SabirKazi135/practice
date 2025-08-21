// ✅ Loader for Products (works with public/products.json)
export async function productsLoader() {
  const res = await fetch('/products.json'); // fetches from public folder
  if (!res.ok) throw new Response('Failed to fetch products', { status: 500 });
  return res.json();
}
