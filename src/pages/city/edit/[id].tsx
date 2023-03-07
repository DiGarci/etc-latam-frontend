import CityForm from "@/components/forms/CityForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetCity } from "@/hooks/city/useGetCity";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditCity() {
    const { user } = useAuth();
    const { query } = useRouter();
    const cityId = query.id as string;
    const { data, isLoading, error } = useGetCity(cityId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Editar Ciudad" />
            </Splitter>
            <CityForm data={data} />
        </SectionWrapper>
    );
}
