const BASE_URL = "https://lab14.onrender.com"; // reemplaza con tu dominio real

export default async function handler(req, res) {
  // En un caso real, esto vendría de tu DB o CMS
  const rutas = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${rutas.map((url) => `
        <url>
          <loc>${BASE_URL}${url}</loc>
        </url>`).join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
