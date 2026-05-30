import axios from "axios";

const BASE_URL =
  "https://flashaid-v3-dev-backened.flashaid.in";

export const sendOtp = async (mobile: string) => {
  await axios.post(
    `${BASE_URL}/auth/v1/tirumala/generate-otp?phoneNumber=${mobile}`
  );
};

export const verifyOtp = async (
  mobile: string,
  otp: string
) => {
  const response = await axios.post(
    `${BASE_URL}/auth/v1/tirumala/verify-otp?phoneNumber=+91${mobile}&otp=${otp}`
  );

  const data = response.data;

  return (
    (typeof data === "object" &&
      data?.type === "success") ||
    (typeof data === "string" &&
      data.toLowerCase().includes("verified"))
  );
};