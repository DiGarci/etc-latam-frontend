import axios from "@/config/axios";

export const EndPoints = {
    reports: 'reports',
    users: 'users',
    clients: 'clients',
    tickets: 'tickets',
    countries: 'countries',
    cities: 'cities',
    statuses: 'statuses',
    priorities: 'priorities',
    incidentTypes: 'incident-types',
    roles: 'roles',
} as const;

type EndPointType = typeof EndPoints;
type EndPointsKeys = keyof EndPointType;

export type EndPointsValues = EndPointType[EndPointsKeys];

export const GET = async <T>(endpoint: EndPointsValues, id?: string) => await axios.get<T>(`/${endpoint}`);
export const POST = async <T>(endpoint: EndPointsValues, data: T) => await axios.post<T>(`/${endpoint}`, data);
export const PUT = async <T, K>(endpoint: EndPointsValues, id: string, data: K) => await axios.put<T>(`/${endpoint}/${id}`, data);
export const DELETE = async <T>(endpoint: EndPointsValues, id: string) => await axios.delete<T>(`/${endpoint}/${id}`);

export default {
    GET,
    POST,
    PUT,
    DELETE,
} as const

// https://github.com/webmasterdevlin/zustand-immer-react-query-course/blob/master/src/axios/generic-api-calls.ts
