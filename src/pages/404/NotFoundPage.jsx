import React from 'react'
import { Helmet } from 'react-helmet';
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div id="notfound">
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>
      <div class="notfound">
        <div class="notfound-404">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-cry" width="140" height="140" viewBox="0 0 24 24" stroke-width="1" stroke="#e26114" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 10l.01 0" />
            <path d="M15 10l.01 0" />
            <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
            <path d="M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z" />
            <path d="M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222" />
          </svg>
          
        </div>
        <h1>404</h1>
        <h2>¡Ups! Página no encontrada</h2>
        <p>
            Lo sentimos pero la página que busca no existe, ha sido eliminada. el nombre cambió o no está disponible temporalmente.
        </p>
        <a href="/">Volver a la página de inicio</a>
      </div>
    </div>
  )
}

export default NotFoundPage