import axios from 'axios';

const firebase = axios.create({
  baseURL: 'https://brief-de05b-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default firebase;
