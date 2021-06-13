import axios from 'axios';

const MARVEL_BASE_URL = 'https://gateway.marvel.com/v1/public';
const MARVEL_PUBLIC_KEY = '6c915ef1dcee8a56cc163a02592aad2d';
const MARVEL_HASH = 'a85ef61e3494356c56e955d2ac0974f0';
const MARVEL_TS = '1';

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: MARVEL_BASE_URL
  });
  axiosInstance.interceptors.request.use((config) => {
    const configWithApiKey = {
      ...config,
      params: {
        ...config.params,
        apikey: MARVEL_PUBLIC_KEY,
        hash: MARVEL_HASH,
        ts: MARVEL_TS
      }
    };

    return configWithApiKey;
  });
  return axiosInstance;
};

const instancedApiClient = apiClient();

export const getHeroes = (search) => {
  return instancedApiClient.get('/characters', {
    params: {
      nameStartsWith: search,
      limit: 50
    }
  });
};

export const getHeroComics = (heroId) => {
  return instancedApiClient.get(`/characters/${heroId}/comics`, {
    params: {
      limit: 50
    }
  });
};

export const getComic = (comicId) => {
  return instancedApiClient.get(`/comics/${comicId}`, {
    params: {}
  });
};

export const getComics = (search) => {
  return instancedApiClient.get(`/comics`, {
    params: {
      titleStartsWith: search,
      limit: 50
    }
  });
};

const services = {
  getHeroes,
  getHeroComics,
  getComic,
  getComics
};

export default services;
