import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Sechura = () => {
  useEffect(() => {
    // Crear el mapa y definir la ubicación central
    const map = L.map('sechura-map', {
      center: [-5.556353261691145, -80.82329696016133],
      zoom: 16.5,
      scrollWheelZoom: false, // Desactivar el zoom con la rueda del mouse
    });

    // Agregar el mapa base (OpenStreetMap) al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Crear un ícono personalizado con fondo rojo
    const customIcon = L.divIcon({
      className: 'custom-icon',
      html: '<div style="background-color: red; border-radius: 50%; width: 13px; height: 13px;"></div>',
    });

    // Crear el marcador en la ubicación central con el ícono personalizado
    const marker = L.marker([-5.556353261691145, -80.82329696016133], { icon: customIcon }).addTo(map);

    // Configurar un texto (tooltip) para el marcador
    marker
      .bindTooltip('CDT - Sechura', {
        permanent: true, // Mostrar el tooltip de forma permanente
        direction: 'top', // Dirección del tooltip (arriba)
        className: 'custom-tooltip', // Agregar una clase CSS personalizada al tooltip
      })
      .openTooltip();

    // Limpieza: eliminar el mapa cuando el componente se desmonte
    return () => {
      map.remove();
    };
  }, []);

  return <div id="sechura-map" style={{ height: '200px' }}></div>;
};

export default Sechura;
