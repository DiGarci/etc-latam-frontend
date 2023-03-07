import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Widget from "@/components/Widget";

export default function Dashboard() {
    return (
        <SectionWrapper>
            <HeadingTitle title="Tablero" />
            <section className="flex flex-wrap gap-5">
                <Widget
                    href="/tickets?filter_by="
                    title="Mis tickets"
                    value={"10"}
                />
                <Widget
                    href="/tickets?filter_by="
                    title="Mis tickets atrasados"
                    value={"2"}
                />
                <Widget
                    href="/tickets"
                    title="Mis tickets para hoy"
                    value={"2"}
                />

                <Widget
                    href="/tickets?filter_by="
                    title="Tickets abiertos"
                    value={"2"}
                />
                <Widget
                    href="/tickets?filter_by="
                    title="Tickets atrasados"
                    value={"2"}
                />
                <Widget
                    href="/tickets?filter_by="
                    title="Tickets no asignados"
                    value={"2"}
                />
            </section>
        </SectionWrapper>
    );
}
