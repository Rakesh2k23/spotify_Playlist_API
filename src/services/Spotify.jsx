import axios from 'axios';

const CLIENT_ID = '1a313553c6cc41f9ac9a1bb63f3b80ac';
const CLIENT_SECRET = '780753c9a6464659a9cd39f20beed009';
const REDIRECT_URI = 'http://localhost:3000/callback';

export const getToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);

  const response = await axios.post('https://accounts.spotify.com/api/token', params);
  return response.data.access_token;
};

export const searchTracks = async (query, token) => {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: query,
      type: 'track'
    }
  });
  console.log('Tracks:', response.data.tracks.items); // Debugging log
  return response.data.tracks.items;
};
