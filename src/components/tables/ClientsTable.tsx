import { useGetClients } from "@/hooks/client/useGetClients";
import Table from "./Table";

const headers = [
    { id: "ID" },
    { name: "Nombre" },
    { email: "Email" },
    { address: "Dirección" },
    { phone: "Teléfono" },
];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function ClientsTable() {
    const { data, isLoading } = useGetClients();

    if (isLoading) return <div></div>;

    return <Table data={data} headers={headers} actions={actionsHandler} />;
}
