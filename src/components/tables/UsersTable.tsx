import { useGetUsers } from "@/hooks/user/useGetUsers";
import Table from "./Table";

const headers = [
    { id: "ID" },
    { username: "Usuario" },
    { first_name: "Nombre" },
    { last_name: "Apellido" },
    { email: "Email" },
    { type: "Tipo" },
    { role: "Rol" },
    { is_active: "Activo" },
    { organization: "Organización" },
];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function UsersTable() {
    const { data, isLoading } = useGetUsers();

    if (isLoading) return <div></div>;

    return (
        <Table
            slug="username"
            data={data}
            headers={headers}
            actions={actionsHandler}
        />
    );
}
