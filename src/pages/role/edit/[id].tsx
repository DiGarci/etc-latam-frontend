import RoleForm from "@/components/forms/RoleForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetRole } from "@/hooks/role/useGetRole";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditRole() {
    const { user } = useAuth();
    const { query } = useRouter();
    const reportId = query.id as string;
    const { data, isLoading, error } = useGetRole(reportId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Editar Rol" />
            </Splitter>
            <RoleForm data={data} />
        </SectionWrapper>
    );
}
