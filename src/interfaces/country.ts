import { ICity } from './city';

export interface ICountry {
    id: string;
    name: string;
    currency: string;
    language: string;
    // capital: string;
    code: string;
    cities?: ICity[];
}
