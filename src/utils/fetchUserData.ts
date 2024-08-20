import axios from 'axios';

export async function fetchUserData(token: string): Promise<any> {
  try {
    const response = await axios.get('https://prepify-server-side.onrender.com/api/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data', error);
    throw new Error('Failed to fetch user data');
  }
}

