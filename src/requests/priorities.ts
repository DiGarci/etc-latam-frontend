import db from '@/../public/db.json';
import { Priority } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.priorities;
export const getPriorities = async () => table;
export const getPriority = async (id: string) => table.find((Priority) => Priority.id === id);

// export const getPriorities = async () => api.GET<Priority>('priorities');
// export const getPriority = async (id: string) => api.GET('priorities', id);
// export const createPriority = async (data: Priority) => api.POST('priorities', data);
// export const updatePriority = async (id: string, data: Priority) => api.PUT('priorities', id, data);
// export const deletePriority = async (id: string) => api.DELETE('priorities', id);
