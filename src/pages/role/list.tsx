import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import RolesTable from "@/components/tables/RolesTable";

export default function RoleList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Roles" />
                <ButtonLink href="/role/create" value="Crear Role" />
            </Splitter>
            <RolesTable />
        </SectionWrapper>
    );
}
