import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import { useGetCountries } from "@/hooks/country/useGetCountries";
import { CityFormProps } from "@/interfaces/type";
import InputListbox from "../InputListbox";
import FormWrapper from "./FormWrapper";

export default function CityForm(props: CityFormProps) {
    const data = props.data;
    const { data: countries } = useGetCountries();
    const countriesNames = countries?.map(
        (country) => country.name
    ) as string[];

    return (
        <FormWrapper>
            <div className="flex gap-5">
                <Input
                    type="text"
                    size="medium"
                    label="Nombre de la Ciudad:"
                    placeholder="e.g. Tegucigalpa"
                />
                <InputListbox
                    label="Seleccione el País:"
                    items={countriesNames}
                    defaultValue={data?.type}
                />
            </div>
            <FormActions />
        </FormWrapper>
    );
}
