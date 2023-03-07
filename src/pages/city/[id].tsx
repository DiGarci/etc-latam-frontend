import DetailsView from "@/components/DetailsView";
import HeadingTitle from "@/components/HeadingTitle";
import ItemActions from "@/components/ItemActions";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetCity } from "@/hooks/city/useGetCity";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const headers = {
    id: "ID",
    name: "Nombre",
    code: "Código",
    country: "Ciudades",
    created_at: "Creado",
    updated_at: "Actualizado",
};

export default function CityDetails() {
    const { user } = useAuth();
    const { query } = useRouter();
    const cityId = query.id as string;
    const { data, isLoading, error } = useGetCity(cityId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Detalles de la Ciudad" />
                <ItemActions item={data} />
            </Splitter>
            <DetailsView headers={headers} data={data} />
        </SectionWrapper>
    );
}
