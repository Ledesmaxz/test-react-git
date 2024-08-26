import React, { useState } from 'react';
import '../styles/Categories.css';
import desplegableIcon from '../assets/desplegable.png'; 

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="categories">
      {['Mascotas', 'Alimentos', 'Accesorios', 'Salud', 'Ofertas'].map((category, index) => (
        <div key={index}>
          <p onClick={() => handleToggle(index)}>
            {category} <img src={desplegableIcon} alt="Desplegar menú" className="arrow-icon" />
          </p>
          {activeIndex === index && (
            <div className="submenu">
              <p>Opción 1</p>
              <p>Opción 2</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
