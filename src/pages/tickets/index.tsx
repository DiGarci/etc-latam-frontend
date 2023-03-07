import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";
import TicketsTable from "@/components/tables/TicketsTable";

export default function TicketsList() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Tickets" />
            </Splitter>
            <TicketsTable />
        </SectionWrapper>
    );
}
