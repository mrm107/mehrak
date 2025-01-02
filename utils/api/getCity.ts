import axios from 'axios';
import { getTokenFromCookie } from '../helper/getCooki';

async function getCity(wich: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.post(
      `${API_URL}/states/${wich}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookie()}`,
          "Content-Type": "application/json",
        },
      }
    );

return response.data

  } catch (error) {
    console.error("Error:", error);
  }
}

export default getCity; 
