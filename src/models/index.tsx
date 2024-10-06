export type ResultsType = {
  date: string;
  metric_value: number;
};

export type ApiResponseType = {
  count: number;
  results: ResultsType[];
};
