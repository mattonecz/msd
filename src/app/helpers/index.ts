import { ApiResponseType, ResultsType } from "@/models";

export async function loadData(url: string): Promise<ResultsType[]> {
  const response = await fetch(url, { mode: "no-cors" });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const body = await response.json();
  return (body as unknown as ApiResponseType).results;
}
