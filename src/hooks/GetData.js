import axios from "axios";
import { useEffect, useState } from "react";

export const GetData = () => {
  const [cdata, setCdata] = useState([]);
  const [
    filterCountry,
    intensity,
    likelihood,
    relevance,
    usa,
    withoutUSA,
    noCountry,
    Mexico,
  ] = [[], [], [], [], [], [], [], []];
  const url = "https://charts-practice.herokuapp.com/cdata";
  useEffect(() => {
    axios.get(url).then(function (response) {
      setCdata(response.data);
    });
  }, []);
  cdata.map((data, index) => {
    intensity[index] = data.intensity;
    likelihood[index] = data.likelihood;
    relevance[index] = data.relevance;
  });
  let sumOfintensity = 0;
  intensity.map((data) => {
    if (data == undefined) {
      data = 0;
      sumOfintensity += data;
    }
    sumOfintensity += data;
  });

  let sumOfLikelihood = 0;
  likelihood.map((data) => {
    if (data == undefined) {
      data = 0;
      sumOfLikelihood += data;
    }
    sumOfLikelihood += data;
  });

  let sumOfRelevence = 0;
  relevance.map((data) => {
    if (data == undefined) {
      data = 0;
      sumOfRelevence += data;
    }
    sumOfRelevence += data;
  });
  let a,
    b,
    c,
    d,
    e = 0;
  cdata.map((data, index) => {
    if (data.country === "") {
      filterCountry.push(data);
    } else if (data.country === undefined) {
      data.country = "was_undefined";
      filterCountry.push(data);
    }
  });
  return {
    usa,
    filterCountry,
    withoutUSA,
    Mexico,
    noCountry,
    cdata,
    sumOfintensity,
    sumOfRelevence,
    sumOfLikelihood,
  };
};

// if (data.country === "United States of America") {
//     usa[a] = data;
//     a++;
//   } else if (data.country === undefined) {
//     noCountry[b] = index;
//     b++;
//   } else if (data.country === "Mexico") {
//     Mexico[c] = data;
//     c++;
//   } else {
//     withoutUSA[d] = data;
//     d++;
//   }
