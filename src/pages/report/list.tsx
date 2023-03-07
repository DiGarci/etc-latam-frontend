import ButtonLink from "@/components/ButtonLink";
import HeadingTitle from "@/components/HeadingTitle";
import ReportsTable from "@/components/tables/ReportsTable";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function ReportsList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Lista de Reportes" />
                <ButtonLink href="/report/create" value="Crear Reporte" />
            </Splitter>
            <ReportsTable />
        </SectionWrapper>
    );
}
