import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

// Registra los elementos "arc" y "tooltip" para su uso en el gráfico de pastel
Chart.register(ArcElement, Tooltip);

export function AvanceAcademico() {

  const MaetirasCursadas = 20;
  const MateriasRestante = 60;
  const avance =MaetirasCursadas/(MaetirasCursadas + MateriasRestante)



  const data = {
    labels: [MaetirasCursadas,MateriasRestante],
    datasets: [
      {
        data: [ MaetirasCursadas,MateriasRestante],
        backgroundColor: [
          'rgba(64, 207, 255)',
          'rgba(128, 128, 128)',

        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataIndex = context.dataIndex;
            const label = context.chart.data.labels[dataIndex];
            const value = context.chart.data.datasets[0].data[dataIndex];
            const remaining = MateriasRestante/MaetirasCursadas;
            return `Materias :${label}: Porcentaje: ${value}% Avance del : ${remaining}% `;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: '#fff',
        hoverBorderColor: '#fff',
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 7,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
      },
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    color: 'rgba(128, 128, 128, 0.6)',
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
