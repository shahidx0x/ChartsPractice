import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import "./App.css";
import { PieCharts } from "./components/PieCharts/PieCharts";
import { PolarAreaChart } from "./components/PolarAreaChart/PolarAreaChart";
import { GetData } from "./hooks/GetData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Bar Chart Practice",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

function App() {
  const {
    cdata,
    sumOfRelevence,
    sumOfLikelihood,
    sumOfintensity,
    usa,
    withoutUSA,
    Mexico,
    noCountry,
    filterCountry,
  } = GetData();
  console.log(filterCountry);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <PieCharts />
        </div>
        <div className="align-middle">
          <PolarAreaChart />
        </div>
      </div>
    </>
  );
}

export default App;
