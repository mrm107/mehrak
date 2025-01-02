import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendOtpForce = async (mobile: string , BEARER_TOKEN :string) => {
  try {
    const response = await axios.post(
      `${API_URL}/otp/force`,
      { mobile },
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error sending OTP request');
  }
};
