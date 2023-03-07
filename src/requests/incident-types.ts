import db from '@/../public/db.json';
import { IncidentType } from '@/interfaces/type';
import api from '@/utils/api';

const table = db.countries;
export const getIncidentTypes = async () => table;
export const getIncidentType = async (id: string) => table.find((incidentType) => incidentType.id === id);

// export const getIncidentTypes = async () => api.GET<IncidentType>('incident-types');
// export const getIncidentType = async (id: string) => api.GET('incident-types', id);
// export const createIncidentType = async (data: IncidentType) => api.POST('incident-types', data);
// export const updateIncidentType = async (id: string, data: IncidentType) => api.PUT('incident-types', id, data);
// export const deleteIncidentType = async (id: string) => api.DELETE('incident-types', id);
