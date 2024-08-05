import React, { useEffect, useState } from 'react';
import { ContainerPie } from './PieStyles';
import { PieChart } from 'react-minimal-pie-chart';

// Componente que recebe categoryTotals como prop
const PieChartComponent = ({ teste }) => {

  const [hovered, setHovered] = useState(null);

  // Calcula o valor total
  const totalValue = teste.reduce((acc, entry) => acc + entry.value, 0);

  // Calcula a porcentagem
  const getPercentage = (value) => (value / totalValue * 100).toFixed(2);

  return (
    <ContainerPie>
      <PieChart
        data={teste}
        radius={65}
        labelPosition={0}
        paddingAngle={4}
        animate
        animationDuration={1000}
        animationEasing='ease-out'
        segmentsStyle={{
          cursor: 'pointer',
          transition: 'stroke .3s, opacity .3s',
          strokeWidth: 24, // Largura do contorno
          strokeLinecap: 'Butt', // Estilo da extremidade
        }}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
        label={() => ''}
        labelStyle={() => ({
          display: 'none',
        })}
      />
      {hovered !== null && (
        <div
         className='percentage'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: teste[hovered].color,
            padding: '5px',
          }}
        >
          <strong> {`${getPercentage(teste[hovered].value)}%`}</strong>
        </div>
      )}
    </ContainerPie>
  );
};

export default PieChartComponent;
