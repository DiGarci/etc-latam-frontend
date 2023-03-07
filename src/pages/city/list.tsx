import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import CitiesTable from "@/components/tables/CitiesTable";

export default function CitiesList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Ciudades" />
                <ButtonLink href="/city/create" value="Crear Ciudad" />
            </Splitter>
            <CitiesTable />
        </SectionWrapper>
    );
}
