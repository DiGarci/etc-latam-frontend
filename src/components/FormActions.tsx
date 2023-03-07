import { useRouter } from "next/router";
import Button from "./Button";

interface IActionsProps {
    edit?: boolean;
    handleCancel?: () => void;
    handleSubmit?: () => void;
}

export default function FormActions(props: IActionsProps) {
    const { back } = useRouter();

    return (
        <div className="flex justify-end gap-2">
            <Button
                onClick={props.handleCancel || back}
                mode="cancel"
                type="submit"
                value="Cancelar"
            />
            <Button
                onClick={props.handleSubmit}
                mode="success"
                type="submit"
                value={props.edit ? "Actualizar" : "Crear"}
            />
        </div>
    );
}
