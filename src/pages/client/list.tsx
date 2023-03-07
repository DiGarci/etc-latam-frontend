import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import ClientsTable from "@/components/tables/ClientsTable";

export default function ClientList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Clientes" />
                <ButtonLink
                    href="/organizations/create"
                    value="Crear Cliente"
                />
            </Splitter>
            <ClientsTable />
        </SectionWrapper>
    );
}
