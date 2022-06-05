import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { PolarArea } from "react-chartjs-2";
import { GetData } from "../../hooks/GetData";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart = () => {
  const { sumOfLikelihood, sumOfintensity, sumOfRelevence } = GetData();
  const data = {
    labels: ["Intensity", "Relevence", "Likelihood"],
    datasets: [
      {
        label: "# of Votes",
        data: [sumOfintensity, sumOfRelevence, sumOfLikelihood],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <PolarArea data={data} />;
};
