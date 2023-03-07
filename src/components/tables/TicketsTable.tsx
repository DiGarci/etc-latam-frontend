import { useGetTickets } from "@/hooks/ticket/useGetTickets";
import Table from "./Table";

const headers = [{ id: "ID" }, { name: "Nombre" }, { country: "Ciudades" }];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function TicketsTable() {
    const { data, isLoading } = useGetTickets();

    if (isLoading) return <div></div>;

    return <Table data={data} headers={headers} actions={actionsHandler} />;
}
