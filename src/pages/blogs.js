import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Web</title>
        <meta name="description" content="Lee artículos sobre desarrollo web, SEO y más." />
        <meta property="og:title" content="Blog | Mi Sitio Web" />
        <meta property="og:description" content="Explora las últimas entradas del blog sobre tecnología y optimización web." />
        <meta property="og:image" content="/images/blog-og.png" />
      </Head>
      <h1>Blog</h1>
    </>
  );
}
