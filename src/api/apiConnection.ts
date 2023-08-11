import fetch from 'cross-fetch';
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL;

interface ApiResponse {
  data: any;
}

export const apiCall = async (route: string, method: string, data: any = {}): Promise<any> => {
  try {
    let response: Response;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user.token || '';

    const headers: HeadersInit = {
      Authorization: `Bearer ${token}`,
    };

    if (Object.keys(data).length > 0) {
      headers['Content-Type'] = 'application/json';
    }

    response = await fetch(`${apiUrl}/${route}`, {
      method: method,
      mode: 'cors',
      headers: headers,
      body: Object.keys(data).length > 0 ? JSON.stringify(data) : undefined,
    });

    const dataResponse: ApiResponse = await response.json();
    return dataResponse.data;
  } catch (error) {
    toast.error("Error connecting with the API, trying to reconnect", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    throw error;
  }
};

