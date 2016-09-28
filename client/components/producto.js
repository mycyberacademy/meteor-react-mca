// client/components/producto.js

import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <p>
          Este es el componente Producto,
          que pertenece a la categoría:
          { this.props.categoria }, el cual
          tiene el ID { this.props.id }
        </p>
      </div>
    );
  }
}