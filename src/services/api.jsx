import axios from 'axios';

const KEY = '34748521-ef54e554dfa85bd6668b4c463';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function getPictures(pictureName, page) {
  const response = await axios.get(
    `?&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${pictureName}`
  );

  return response.data;
}
