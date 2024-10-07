import React, { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { ApiResponseType, ResultsType } from "@/models";
import { loadData } from "@/api";

export type ChartProps = {
  url: string;
  type: "pie" | "graph";
  containerName: string;
};

export const ChartComp = (props: ChartProps) => {
  const { url, type, containerName } = props;
  const [data, setData] = useState<ResultsType[] | undefined>(undefined);

  const getData = async () => {
    const response = await fetch("/api/fetchData", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setData((data as unknown as ApiResponseType).results);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const chart = new Chart({
        container: containerName,
        autoFit: true,
        height: 500,
      });
      if (type === "graph") {
        getGraph(chart, data);
      } else {
        getPie(chart, data);
      }

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data, containerName, type]);
  return <div id={containerName} style={{ height: "500px" }}></div>;
};

const getPie = (chart: Chart, data: ResultsType[]) => {
  chart.coordinate({ type: "theta", outerRadius: 0.8 });
  chart
    .interval()
    .data(data)
    .transform({ type: "stackY" })
    .encode("y", "metric_value")
    .encode("color", "date")
    .legend("color", {
      position: "bottom",
      layout: { justifyContent: "center" },
    })
    .label({
      position: "outside",
      text: (data: ResultsType) => `${data.date}: ${data.metric_value}`,
    })
    .tooltip((data: ResultsType) => ({
      name: data.date,
      value: `${data.metric_value}`,
    }));
};

const getGraph = (chart: Chart, data: ResultsType[]) => {
  chart
    .interval()
    .data(data)
    .encode("x", "date")
    .encode("y", "metric_value")
    .encode("color", "date");
};
