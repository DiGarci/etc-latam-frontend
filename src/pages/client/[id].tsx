import DetailsView from "@/components/DetailsView";
import HeadingTitle from "@/components/HeadingTitle";
import ItemActions from "@/components/ItemActions";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetClient } from "@/hooks/client/useGetClient";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const headers = {
    id: "ID",
    name: "Nombre",
    created_at: "Creado",
    updated_at: "Actualizado",
    description: "Descripción",
    email: "Email",
    phone: "Teléfono",
    address: "Dirección",
    website: "Sitio Web",
};

export default function ClientDetails() {
    const { user } = useAuth();
    const { query } = useRouter();
    const cliendId = query.id as string;
    const { data, isLoading, error } = useGetClient(cliendId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Detalles del Cliente" />
                <ItemActions item={data} />
            </Splitter>
            <DetailsView headers={headers} data={data} />
        </SectionWrapper>
    );
}
