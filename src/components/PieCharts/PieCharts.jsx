import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import { GetData } from "../../hooks/GetData";
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieCharts = () => {
  const { sumOfLikelihood, sumOfintensity, sumOfRelevence } = GetData();
  const data = {
    labels: ["Intensity", "Relevence", "Likelihood"],
    datasets: [
      {
        label: "# of Votes",
        data: [sumOfintensity, sumOfRelevence, sumOfLikelihood],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
