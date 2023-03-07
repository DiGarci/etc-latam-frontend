import db from '@/../public/db.json';
import { Status } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.statuses;
export const getStatuses = async () => await table;
export const getStatus = async (id: string) => await table.find((status) => status.id === id);

// export const getStatuses = async () => api.GET<Status>('statuses');
// export const getStatus = async (id: string) => api.GET('statuses', id);
// export const createStatus = async (data: Status) => api.POST('statuses', data);
// export const updateStatus = async (id: string, data: Status) => api.PUT('statuses', id, data);
// export const deleteStatus = async (id: string) => api.DELETE('statuses', id);
