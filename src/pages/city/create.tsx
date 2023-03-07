import CityForm from "@/components/forms/CityForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function CreateCity() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear Ciudad" />
            </Splitter>
            <CityForm />
        </SectionWrapper>
    );
}
