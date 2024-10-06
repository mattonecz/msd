"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { ApiResponseType, ResultsType } from "@/models";

export const ChartComp = () => {
  const [dataReady, setDataReady] = useState(false);
  const [data, setData] = useState<ResultsType[]>();
  const loadData = async () => {
    const response = await fetch(
      "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const body = await response.json();
    setDataReady(true);
    setData((body as unknown as ApiResponseType).results);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (dataReady && data) {
      console.log(data);
      const chart = new Chart({
        container: "container",
        autoFit: true,
        height: 500,
      });

      chart
        .interval()
        .data(data)
        .encode("x", "date")
        .encode("y", "metric_value")
        .encode("color", "date");

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [dataReady, data]);

  return <div id="container" style={{ height: "500px" }}></div>;
};
