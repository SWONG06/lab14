import Head from 'next/head';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Web</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros servicios y contenido." />
        <meta property="og:title" content="Contacto | Mi Sitio Web" />
        <meta property="og:description" content="¿Tienes preguntas? Ponte en contacto con nosotros fácilmente." />
        <meta property="og:image" content="/images/contacto-og.png" />
      </Head>
      <h1>Contacto</h1>
    </>
  );
}
