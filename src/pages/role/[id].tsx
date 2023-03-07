import DetailsView from "@/components/DetailsView";
import HeadingTitle from "@/components/HeadingTitle";
import ItemActions from "@/components/ItemActions";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetRole } from "@/hooks/role/useGetRole";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const headers = {
    id: "ID",
    name: "Titulo",
    description: "Descripción",
    permissions: "Permisos",
    created_at: "Creado",
    updated_at: "Actualizado",
    deleted_at: "Eliminado",
};

export default function ReportDetails() {
    const { user } = useAuth();
    const { query } = useRouter();
    const roleId = query.id as string;
    const { data, isLoading, error } = useGetRole(roleId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Detalles del Role" />
                <ItemActions item={data} />
            </Splitter>
            <DetailsView headers={headers} data={data} />
        </SectionWrapper>
    );
}
