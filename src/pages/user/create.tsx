import UserForm from "@/components/forms/UserForm";
import HeadingTitle from "@/components/HeadingTitle";
import SectionWrapper from "@/components/SectionWrapper";
import Splitter from "@/components/Splitter";

export default function CreateUsuario() {
    return (
        <SectionWrapper>
            <Splitter>
                <HeadingTitle title="Crear Usuario" />
            </Splitter>
            <UserForm />
        </SectionWrapper>
    );
}
