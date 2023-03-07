import ReportForm from "@/components/forms/ReportForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function CreateReport() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear Reporte" />
            </Splitter>
            <ReportForm />
        </SectionWrapper>
    );
}
