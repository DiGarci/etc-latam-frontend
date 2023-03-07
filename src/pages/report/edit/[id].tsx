import ReportForm from "@/components/forms/ReportForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import { useGetReport } from "@/hooks/report/useGetReport";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function EditReport() {
    const { user } = useAuth();
    const { query } = useRouter();
    const reportId = query.id as string;
    const { data, isLoading, error } = useGetReport(reportId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return "An error has occurred: " + error;

    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Editar Reporte" />
            </Splitter>
            <ReportForm data={data} />
        </SectionWrapper>
    );
}
