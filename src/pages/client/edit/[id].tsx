import ClientForm from "@/components/forms/ClientForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetClient } from "@/hooks/client/useGetClient";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditClient() {
    const { user } = useAuth();
    const { query } = useRouter();
    const clientId = query.id as string;
    const { data, isLoading, error } = useGetClient(clientId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Editar Cliente" />
            </Splitter>
            <ClientForm data={data} />
        </SectionWrapper>
    );
}
