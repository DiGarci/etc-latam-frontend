import UserForm from "@/components/forms/UserForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetReport } from "@/hooks/report/useGetReport";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditUsuario() {
    const { user } = useAuth();
    const { query } = useRouter();
    const reportId = query.id as string;
    const { data, isLoading, error } = useGetReport(reportId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear Usuario" />
            </Splitter>
            <UserForm data={data} />
        </SectionWrapper>
    );
}
