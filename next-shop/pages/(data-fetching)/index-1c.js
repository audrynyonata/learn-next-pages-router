// Option 1c: fetch products on the server side (in getServerSideProps)
import Head from 'next/head';
import Title from '../components/title';
import { getProducts } from '../lib/products';

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}

function Home({ products }) {
  console.log('home', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
