import { useGetRoles } from "@/hooks/role/useGetRoles";
import Table from "./Table";

const headers = [{ id: "ID" }, { name: "Nombre" }, { country: "Ciudades" }];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function RolesTable() {
    const { data, isLoading } = useGetRoles();

    if (isLoading) return <div></div>;

    return <Table data={data} headers={headers} actions={actionsHandler} />;
}
