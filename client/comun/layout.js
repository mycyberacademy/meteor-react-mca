// client/comun/layout.js

import React from 'react'
export default class extends React.Component {
  render() {

    const { saludar, contenido } = this.props;

    return (
      <div className="layout">
        <h1> Header común </h1>
        
        { contenido() }
        { saludar  }
        
        <footer>
          MyCyberAcademy.com - Aprende sin límites
        </footer>
      </div>
    );
  }
}