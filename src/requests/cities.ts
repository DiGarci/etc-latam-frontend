import db from '@/../public/db.json';
import { City } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.cities as City[];
export const getCities = async () => await table;
export const getCity = async (id: string) => await table.find((city) => city.id === id);

// export const getCities = async () => await api.GET<City>('cities');
// export const getCity = async (id: string) => await api.GET('cities', id);
// export const createCity = async (data: City) => api.POST('cities', data);
export const updateCity = async (id: string, data: City) => api.PUT('cities', id, data);
export const deleteCity = async (id: string) => api.DELETE('cities', id);
