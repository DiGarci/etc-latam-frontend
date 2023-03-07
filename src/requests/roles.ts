import db from '@/../public/db.json';
import { Role } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.roles as Role[];
export const getRoles = async () => await table;
export const getRole = async (id: string) => await table.find((role) => role.id === id);

// export const getRoles = async () => await api.GET<Role>('roles');
// export const getRole = async (id: string) => await api.GET('roles', id);
// export const createRole = async (data: Role) => api.POST('roles', data);
// export const updateRole = async (id: string, data: Role) => api.PUT('roles', id, data);
// export const deleteRole = async (id: string) => api.DELETE('roles', id);
