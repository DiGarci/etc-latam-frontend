import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import InputTextarea from "@/components/InputTextarea";
import { useGetStatuses } from "@/hooks/status/useGetStatuses";
import { useGetUsers } from "@/hooks/user/useGetUsers";
import { TicketFormProps } from "@/interfaces/type";
import InputListbox from "../InputListbox";
import FormWrapper from "./FormWrapper";

export default function TicketForm(props: TicketFormProps) {
    const { data: users } = useGetUsers();
    const { data: statuses } = useGetStatuses();
    const usersList = users?.map((user) => user.first_name) as string[];
    const statusesList = statuses?.map((status) => status.name) as string[];

    return (
        <FormWrapper>
            <InputListbox
                size="large"
                name="requested_by"
                label="Solicitante:"
                items={usersList}
            />
            <InputListbox
                size="large"
                name="status"
                label="Estado:"
                items={statusesList}
            />

            <InputListbox
                size="large"
                name="priority"
                label="Prioridad:"
                items={usersList}
            />

            <Input
                type="text"
                size="large"
                placeholder="e.g. Fallo en compuerta"
                label="Asunto:"
            />
            <InputTextarea
                size="large"
                label="Descripción:"
                placeholder="Descripción del problema"
            />
            <InputListbox
                size="large"
                name="assigned_to"
                label="Asignado a:"
                items={usersList}
            />
            <FormActions />
        </FormWrapper>
    );
}
