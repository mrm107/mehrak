import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendOtp = async (mobile: string) => {
  const response = await axios.post(`${API_URL}/otp`, { mobile });
  return response.data;
};
