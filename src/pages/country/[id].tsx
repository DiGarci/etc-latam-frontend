import DetailsView from "@/components/DetailsView";
import HeadingTitle from "@/components/HeadingTitle";
import ItemActions from "@/components/ItemActions";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetCountry } from "@/hooks/country/useGetCountry";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const headers = {
    id: "ID",
    name: "Nombre",
    code: "Código",
    createdAt: "Creado",
    updatedAt: "Actualizado",
    currency: "Moneda",
    language: "Idioma",
    cities: "Ciudades",
};

export default function CountryDetails() {
    const { user } = useAuth();
    const { query } = useRouter();
    const countryId = query.id as string;
    const { data, isLoading, error } = useGetCountry(countryId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Detalles del País" />
                <ItemActions item={data} />
            </Splitter>
            <DetailsView headers={headers} data={data} />
        </SectionWrapper>
    );
}
