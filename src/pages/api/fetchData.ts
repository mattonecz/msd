import { ApiResponseType } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType>
) {
  try {
    const { url } = req.body;
    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500);
  }
}
