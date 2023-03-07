import { useGetCountries } from "@/hooks/country/useGetCountries";
import Table from "./Table";

const headers = [{ id: "ID" }, { name: "Nombre" }, { cities: "Ciudades" }];

const actionsHandler = {
    delete: {
        Handler: (row: any) => console.log(row),
    },
};

export default function CountriesTable() {
    const { data, isLoading } = useGetCountries();

    if (isLoading) return <div></div>;

    return <Table data={data} headers={headers} actions={actionsHandler} />;
}
