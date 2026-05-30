import axios from "axios";

const BASE_URL =
  "https://flashaid-v3-dev-backened.flashaid.in/auth/v1/care";

export const getCareDetails = async (
  mobileNumber: string,
) => {
  const response = await axios.get(
    `${BASE_URL}/details`,
    {
      params: {
        mobileNumber,
      },
    },
  );

  return response.data;
};

export const saveDiseaseStatus = async (
  mobileNumber: string,
  criticalIllness: boolean,
) => {
  const response = await axios.post(
    `${BASE_URL}/save-disease`,
    {
      mobileNumber,
      criticalIllness,
    },
  );

  return response.data;
};