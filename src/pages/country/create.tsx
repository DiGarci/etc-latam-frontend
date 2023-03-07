import CountryForm from "@/components/forms/CountryForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function CreateCountry() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear País" />
            </Splitter>
            <CountryForm />
        </SectionWrapper>
    );
}
