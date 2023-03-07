export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    phone: string;
    type: "admin" | "agent" | "client";
}
