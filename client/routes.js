// client/routes.js

import React from 'react'
import {mount} from 'react-mounter'

import Layout   from './comun/layout.js'
import Home     from './components/home.js'
import Producto from './components/producto.js'

FlowRouter.route('/', {
  name: 'home',
  action( params ) {
    console.log('Estamos en HOME');

    mount( Layout, {
      contenido: function() { return (<Home />) },
      saludar  : "Hola, esta propiedad está disponible en Layout"
    });
    
  }
});

FlowRouter.route('/ver/:categoria/producto/:id', {
  name: 'listar_producto',
  action( params ) {
    
    mount( Layout, {
      contenido: () => <Producto {...params} />,
      saludar  : "Hola, esta propiedad está disponible en Layout"
    });
    
  }
});