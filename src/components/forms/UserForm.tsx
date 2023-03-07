import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import { useGetClients } from "@/hooks/client/useGetClients";
import { UserFormProps } from "@/interfaces/type";
import InputListbox from "../InputListbox";
import FormWrapper from "./FormWrapper";

export default function UserForm(props: UserFormProps) {
    const data = props.data || null;
    const { data: clientsData, isLoading, error } = useGetClients();
    const clientsNameList = clientsData?.map(
        (client) => client.name
    ) as string[];

    return (
        <FormWrapper>
            <div className="flex gap-5">
                <div>
                    <Input
                        type="email"
                        value={data?.email}
                        size="medium"
                        label="Correo electrónico:"
                        placeholder="ejemplo@correo.com"
                    />
                    <InputListbox
                        name="client"
                        label="Clientes:"
                        items={clientsNameList}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        size="medium"
                        label="Nombre de usuario:"
                        placeholder="@ejemplo"
                    />
                </div>
            </div>
            <FormActions />
        </FormWrapper>
    );
}
