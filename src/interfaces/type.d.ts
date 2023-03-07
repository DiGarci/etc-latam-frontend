interface ITableProps {
    data: any[];
    children?: any;
    columns: Array<{}>;
    actions?: {};
}

interface IMode {
    cancel: "cancel";
    danger: "danger";
    normal: "normal";
    success: "success";
    warning: "warning";
}

interface ITableAction {
    icon: any;
    handler: (row: any) => void;
    mode: keyof IMode;
}

interface ITableActions {
    delete: ITableAction;
    edit: ITableAction;
    print: ITableAction;
    download: ITableAction;
    share: ITableAction;
}

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> { }

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    value?: string | any;
    icon?: any;
    size?: "small" | "medium" | "large" | "full" | "auto";
    padding?: "small" | "medium" | "large";
    href?: string;
    mode: "danger" | "normal" | "success" | "warning" | "cancel";
    type?: "submit" | "reset" | "button";
}

export interface InputListboxProps extends IInputProps {
    items: string[];
    label?: string;
    name?: string;
    size?: "full" | "large" | "small" | "medium";
    icon?: typeof IconCheck | typeof IconChevronDown;
}

export { ICity as City } from './city';
export { IClient as Client } from './client';
export { ICountry as Country } from './country';
export { IIncidentType as IncidentType } from './incident-type';
export { IPriority as Priority } from './priority';
export { IReport as Report } from './report';
export { IRole as Role } from './role';
export { IState as State } from './state';
export { IStatus as Status } from './status';
export { ITicket as Ticket } from './ticket';
export { IUser as User } from './user';


export interface IFormProps<T> {
    data?: T;
}

export interface ReportFormProps extends IFormProps<IReport> { }
export interface ClientFormProps extends IFormProps<IClient> { }
export interface TicketFormProps extends IFormProps<ITicket> { }
export interface UserFormProps extends IFormProps<IUser> { }
export interface CountryFormProps extends IFormProps<ICountry> { }
export interface CityFormProps extends IFormProps<ICity> { }
export interface StateFormProps extends IFormProps<IState> { }
export interface RoleFormProps extends IFormProps<IReport> { }
export interface IncidenTypeFormProps extends IFormProps<IReport> { }
export interface PriorityFormProps extends IFormProps<IReport> { } 
