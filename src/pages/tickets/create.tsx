import TicketForm from "@/components/forms/TicketForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function CreateTicket() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear Ticket" />
            </Splitter>
            <TicketForm />
        </SectionWrapper>
    );
}
