import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function IncidentTypeList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Tipos de Incidentes" />
                <ButtonLink
                    href="/incident-type/create"
                    value="Crear Tipo de Incidente"
                />
            </Splitter>
        </SectionWrapper>
    );
}
