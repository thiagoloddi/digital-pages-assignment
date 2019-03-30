import axios from 'axios';
import md5 from 'md5';
import qs from 'query-string';

const auth = (privateKey, publicKey) => {
  const ts = Date.now().toString();
  return {
    ts, 
    apikey: publicKey, 
    hash: md5(ts + privateKey + publicKey)
  }
}

export const getCharacters = (privateKey, publicKey, offset = 0) => {
  const query = { 
    ...auth(privateKey, publicKey),
    limit: 10,
    offset
  }
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters?${qs.stringify(query)}`);
}

export const getCharacter = (privateKey, publicKey, charId) => {
  const query = {
    ...auth(privateKey, publicKey)
  };
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters/${charId}?${qs.stringify(query)}`);
}

export const getComics = (privateKey, publicKey, charId) => {
  const query = {
    ...auth(privateKey, publicKey)
  };
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?${qs.stringify(query)}`);
}