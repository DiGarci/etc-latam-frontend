import db from '@/../public/db.json';
import { Client } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.clients;
export const getClients = async () => await table;
export const getClient = async (id: string) => await table.find((Client) => Client.id === id);

// export const getClients = async () => await api.GET<Client>('clients');
// export const getClient = async (id: string) => await api.GET('clients', id);
// export const createClient = async (data: Client) => api.POST('clients', data);
// export const updateClient = async (id: string, data: Client) => api.PUT('clients', id, data);
// export const deleteClient = async (id: string) => api.DELETE('clients', id);
