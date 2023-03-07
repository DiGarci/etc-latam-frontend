import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import CountriesTable from "@/components/tables/CountriesTable";

export default function CountriesList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Países" />
                <ButtonLink href="/country/create" value="Crear País" />
            </Splitter>
            <CountriesTable />
        </SectionWrapper>
    );
}
