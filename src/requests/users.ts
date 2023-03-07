import db from '@/../public/db.json';
import { User } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.users;
export const getUsers = async () => table;
export const getUser = async (id: string) => table.find((user) => user.id === id);
export const createUser = async (data: User) => table.push(data);

// export const getUsers = async () => api.GET<User>('users');
// export const getUser = async (id: string) => api.GET('countrie', id);
// export const createUser = async (data: User) => api.POST('users', data);
// export const updateUser = async (id: string, data: User) => api.PUT('users', id, data);
// export const deleteUser = async (id: string) => api.DELETE('users', id);
