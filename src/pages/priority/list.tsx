import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";

export default function PrioritiesList() {
    return (
        <SectionWrapper>
            <div className="flex items-center justify-between">
                <HeadingTitle title="Lista de Prioridades" />
                <ButtonLink href="/priority/create" value="Crear Prioridad" />
            </div>
        </SectionWrapper>
    );
}
