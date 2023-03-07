import db from '@/../public/db.json';
import { Country } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.countries;
export const getCountries = async () => table;
export const getCountry = async (id: string) => table.find((country) => country.id === id);
export const createCountry = async (data: Country) => table.push(data);

// export const getCountries = async () => api.GET<Country>('countries');
// export const getCountry = async (id: string) => api.GET('countries', id);
// export const createCountry = async (data: Country) => api.POST('countries', data);
// export const updateCountry = async (id: string, data: Country) => api.PUT('countries', id, data);
// export const deleteCountry = async (id: string) => api.DELETE('countries', id);
