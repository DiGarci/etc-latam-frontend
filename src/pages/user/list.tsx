import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import UsersTable from "@/components/tables/UsersTable";

export default function UsersList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Usuarios" />
                <ButtonLink href="/user/create" value="Crear usuario" />
            </Splitter>
            <UsersTable />
        </SectionWrapper>
    );
}
