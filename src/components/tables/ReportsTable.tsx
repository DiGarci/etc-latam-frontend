import { useGetReports } from "@/hooks/report/useGetReports";
import Table from "./Table";

const headers = [
    { id: "ID" },
    { name: "Nombre" },
    { type: "Tipo de Informe" },
    { format: "Formato" },
];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function ReportsTable() {
    const { data, isLoading } = useGetReports();

    if (isLoading) return <div></div>;

    return <Table data={data} headers={headers} actions={actionsHandler} />;
}
