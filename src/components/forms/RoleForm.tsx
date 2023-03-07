import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import InputDateTime from "@/components/InputDateTime";
import InputListbox from "@/components/InputListbox";
import { useGetClients } from "@/hooks/client/useGetClients";
import { ReportFormProps } from "@/interfaces/type";
import FormWrapper from "./FormWrapper";

export default function RoleForm(props: ReportFormProps) {
    const setData = props.data;
    const { data: clients, isLoading, error } = useGetClients();
    const clientsNameList = clients?.map((client) => client.name) as string[];

    return (
        <FormWrapper>
            <Input
                value={setData?.name}
                type="text"
                size="large"
                label="Nombre del reporte:"
                placeholder="Reporte general de la semana 05 del 2023"
            />
            <InputListbox
                label="Organización:"
                size="large"
                items={clientsNameList}
                defaultValue={setData?.type}
            />

            <FormActions edit={true} />
        </FormWrapper>
    );
}
