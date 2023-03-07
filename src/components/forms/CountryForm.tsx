import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import FormWrapper from "./FormWrapper";

interface ICountryFormProps {
    setData?: any;
}

export default function CountryForm(props: ICountryFormProps) {
    const data = props.setData;

    return (
        <FormWrapper>
            <Input
                name="name"
                type="text"
                size="large"
                label="Nombre del país:"
                placeholder="e.g. Honduras"
            />
            <FormActions />
        </FormWrapper>
    );
}
