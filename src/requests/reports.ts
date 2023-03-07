import db from '@/../public/db.json';
import { Report } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.reports;
export const getReports = async () => table;
export const getReport = async (id: string) => table.find((report) => report.id === id);
export const createReport = async (data: Report) => table.push(data);

// export const getReports = async () => api.GET<Report>('reports');
// export const getReport = async (id: string) => api.GET('reports', id);
// export const createReport = async (data: Report) => api.POST('reports', data);
// export const updateReport = async (id: string, data: Report) => api.PUT('reports', id, data);
// export const deleteReport = async (id: string) => api.DELETE('reports', id);
