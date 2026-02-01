import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // --- TUS DATOS ---
  const eventos = [
    {
      fecha: "20 Sep 2025",
      titulo: "El 'Sí' más importante",
      descripcion: "Hacer click para ver cómo empezó todo...", 
      detalleCompleto: "Tal vez no lo parecia pero en ese momento estaba muuuy nervioso y no encontraba el momento adecuado para preguntarte, Pero cuando me dijiste que sí, fue el mejor momento de mi vida.",
      imagenes: ["/picnic.jpg", "/picnicFlowers.jpg", "/picnicSelfie.jpg"] 
    },
    {
      fecha: "23 Dic 2024",
      titulo: "Nuestro primer mesiversario",
      descripcion: "Celebrando nuestro primer mes juntos.",
      detalleCompleto: "Fue un mes lleno de risas, y momentos muy especiales con mi rolecito, te amo 🦦.",
      imagenes: ["./firstMonth.jpeg"]
    },
    {
      fecha: "27 Ene 2025",
      titulo: "Foto Shoot",
      descripcion: "Graduados y felices.",
      detalleCompleto: "Ese día fue muy especial y nos veiamos muy guapos los dos, me encantantaron todas las fotos que nos tomamos juntos.",
      imagenes: ["./photoShoot1.jpeg", "./photoShoot2.jpeg"]
    },
    {
      fecha: "14 Feb 2026",
      titulo: "Nuestro San Valentín",
      descripcion: "Un regalo hecho a mano.",
      detalleCompleto: "Quería regalarte algo hecho con mis propias manos (y código). Te amo.",
      imagenes: [] 
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ENCABEZADO (Ahora usa clase CSS para poder achicarse en móvil) */}
      <header className="main-header">
        <h1>Nuestra Historia ❤️</h1>
        <p>Toca los recuerdos para ver más</p>
      </header>

      {/* LÍNEA DEL TIEMPO */}
      <div className="timeline-container">
        {eventos.map((evento, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div 
              className="content" 
              onClick={() => setEventoSeleccionado(evento)} 
            >
              <span className="date-badge">{evento.fecha}</span>
              <h2>{evento.titulo}</h2>
              <p>{evento.descripcion}</p>
              
              {evento.imagenes.length > 0 && (
                <div style={{ position: 'relative', marginTop: '15px' }}>
                  <img 
                    src={evento.imagenes[0]} 
                    alt="preview" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                  {evento.imagenes.length > 1 && (
                    <div style={{
                      position: 'absolute', bottom: '10px', right: '10px', 
                      background: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px', 
                      borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold'
                    }}>
                      +{evento.imagenes.length - 1} fotos
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#888', fontSize: '0.9rem' }}>
        <p>© 2026 - Hecho con amor</p>
      </footer>

      {/* --- MODAL (POPUP) --- */}
      {eventoSeleccionado && (
        <div 
          className="modal-overlay" 
          onClick={() => setEventoSeleccionado(null)} 
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
          >
            <button className="close-button" onClick={() => setEventoSeleccionado(null)}>&times;</button>
            
            <span className="date-badge">{eventoSeleccionado.fecha}</span>
            <h2 style={{ color: '#b11d4d', marginTop: '10px' }}>{eventoSeleccionado.titulo}</h2>
            
            <p style={{ lineHeight: '1.6', color: '#444' }}>
              {eventoSeleccionado.detalleCompleto}
            </p>

            {eventoSeleccionado.imagenes.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginTop: '20px' }}>
                {eventoSeleccionado.imagenes.map((img: string, i: number) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt="detalle" 
                    style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;