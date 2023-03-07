import CountryForm from "@/components/forms/CountryForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetCountry } from "@/hooks/country/useGetCountry";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditCountry() {
    const { user } = useAuth();
    const { query } = useRouter();
    const countryId = query.id as string;
    const { data, isLoading, error } = useGetCountry(countryId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;
 
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Editar País" />
            </Splitter>
            <CountryForm setData={data} />
        </SectionWrapper>
    );
}
