import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  const esVideo = (url: string) => {
    return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.mov') || url.toLowerCase().endsWith('.webm');
  };

  const eventos = [
    {
      fecha: "23 Nov 2024",
      titulo: "El 'Sí' más importante",
      descripcion: "Hacer click para ver cómo empezó todo...", 
      detalleCompleto: "Tal vez no lo parecia pero en ese momento estaba muuuy nervioso y no encontraba el momento adecuado para preguntarte, Pero cuando me dijiste que sí, fue el mejor momento de mi vida.",
      imagenes: ["./picnic.jpeg", "./picnicFlowers.jpeg", "./picnicSelfie.jpeg"] 
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
      fecha: "14 Feb 2025",
      titulo: "Nuestro Primer San Valentín",
      descripcion: "Un día especial para nosotros.",
      detalleCompleto: "Estaba muy feliz por celebrar nuestro primer San Valentín juntos, y estaba un poco nervioso por saber si te iba a gustar el ramo porque de ultimo momento me lo cambiaron y al ver tu reacción me sentí mas tranquilo y feliz de que te haya gusatado mucho.",
      imagenes: ["./SvFlowers.jpeg"] 
    },
    {
      fecha: "12 May 2025",
      titulo: "El Reencuentro",
      descripcion: "Después de un tiempo separados, por fin juntos de nuevo.",
      detalleCompleto: "En ese punto creeme que te extrañaba demasiado y no podia esperar mas pare verte por un momento y abrazarte, sé que fue algo dificil para ti pero creeme que lo fue tambien para mi",
      imagenes: ["./selfie.jpeg", "./selfieArt.jpeg", "./kiss.mp4"]
    },
    {
      fecha: "23 Jun 2025",
      titulo: "Una Cena Inolvidable",
      descripcion: "Nuestro primer mesiversario juntos.",
      detalleCompleto: "Este era un día muy especial para ambos, por primera vez celebrabamos un mes el mero dia y te juro que no podia creer lo hermosa que te veias, y creeme que me lo pase muy bien contigo ese día.",
      imagenes: ["./flowersPic.jpeg", "./ourDinner.jpeg", "./mirrorPic.jpeg", "./selfieKiss.jpeg"]
    },
    {
      fecha: "31 Oct 2025",
      titulo: "Nuestra Primera Noche de Halloween",
      descripcion: "Celebrando juntos nuestro primer Halloween.",
      detalleCompleto: "Fue un gran halloween sé que el lugar flopeo pero fue muy divertido todo lo demas y sin duda puedo decir que nos la pasamos bomba jajajjja y todo q ver nuestro disfraz.",
      imagenes: ["./halloween1.jpeg", "./halloweenVid.mp4", "./halloween2.jpeg"]
    },
    {
      fecha: "23 Nov 2025 y 29 Nov 2025",
      titulo: "Aniversario de nuestro 'Sí'",
      descripcion: "Celebrando nuestro primer aniversario.",
      detalleCompleto: "Me moria de ganas de celebrar este día contigo y de poder estar juntos, pero algo más nos impipidió estar juntos ese día, pero sé que pronto podremos celebrar muchos más aniversarios juntos mi rolecito hermoso, estaba muy rico el pastelito 🦦.",
      imagenes: ["./anniversaryFlowers.jpeg", "./flowersReaction.mp4", "./breakfastPic.jpeg"]
    },
    {
      fecha: "31 Dic 2025",
      titulo: "Nuestra Primera Noche de Año Nuevo",
      descripcion: "Celebrando juntos nuestro primer Año Nuevo.",
      detalleCompleto: "Fue una noche muy especial para nosotros, nos abrazamos y nos dimos un beso en el año nuevo, me sentí muy feliz de haber tenido la oportunidad de estar contigo todo este tiempo.",
      imagenes: ["./newYear1.jpeg", "./newYear2.jpeg", "./newYear3.jpg"]
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      
      <header className="main-header">
        <h1>Nuestra Historia</h1>
        <p>Toca los recuerdos para ver más</p>
      </header>

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

                  {esVideo(evento.imagenes[0]) ? (
                    <video 
                      src={evento.imagenes[0]} 
                      controls 
                      muted
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', backgroundColor: '#000' }} 
                    />
                  ) : (
                    <img 
                      src={evento.imagenes[0]} 
                      alt="preview" 
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                  )}

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
        <p>© 2026 - Hecho con amor para mi rolecito</p>
      </footer>

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
                {eventoSeleccionado.imagenes.map((item: string, i: number) => (
                  
                  // Aquí usamos la misma lógica para cada item
                  esVideo(item) ? (
                    <video 
                      key={i}
                      src={item} 
                      controls 
                      playsInline // Importante para iPhone
                      style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backgroundColor: '#000' }} 
                    />
                  ) : (
                    <img 
                      key={i} 
                      src={item} 
                      alt="detalle" 
                      style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                    />
                  )

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
