import DetailsView from "@/components/DetailsView";
import HeadingTitle from "@/components/HeadingTitle";
import ItemActions from "@/components/ItemActions";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetReport } from "@/hooks/report/useGetReport";
import { useAuth } from "@/hooks/useAuth";
import { Report } from "@/interfaces/type";
import { useRouter } from "next/router";

const headers: Report = {
    id: "ID",
    name: "Titulo",
    type: "Tipo de informe",
    format: "Formato",
    description: "Descripción",
    date_from: "Fecha desde",
    date_to: "Fecha hasta",
    hour_from: "Hora desde",
    hour_to: "Hora hasta",
    user: "Generado por",
    to_email: "Enviar al correo",
    created_at: "Creado el",
    updated_at: "Actualizado el",
    link_download: "Descargar",
};

export default function ReportDetails() {
    const { user } = useAuth();
    const { query } = useRouter();
    const reportId = query.id as string;
    const { data, isLoading, error } = useGetReport(reportId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Detalles del Reporte" />
                <ItemActions item={data} />
            </Splitter>
            <DetailsView headers={headers} data={data} />
        </SectionWrapper>
    );
}
