export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", background: "#eee", borderRadius: "8px" }}>
      <h2>Componente cargado dinámicamente</h2>
      <p>Este componente fue cargado con lazy loading.</p>
    </div>
  );
}