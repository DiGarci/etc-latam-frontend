import FormActions from "@/components/FormActions";
import Input from "@/components/Input";
import InputDateTime from "@/components/InputDateTime";
import InputListbox from "@/components/InputListbox";
import { ReportFormProps } from "@/interfaces/type";
import FormWrapper from "./FormWrapper";

const reportTypeList = [
    "Reporte general",
    "Reporte de ventas",
    "Reporte de compras",
    "Reporte de inventario",
    "Reporte de clientes",
    "Reporte de proveedores",
];

const formatList = ["PDF", "Excel"];

export default function ReportForm(props: ReportFormProps) {
    const data = props.data;

    return (
        <FormWrapper>
            <Input
                value={data?.name}
                type="text"
                size="full"
                label="Nombre del reporte:"
                placeholder="Reporte general de la semana 05 del 2023"
            />
            <div className="flex gap-5">
                <div>
                    <InputListbox
                        label="Tipo de informe:"
                        items={reportTypeList}
                        defaultValue={data?.type}
                    />
                    <div className="flex items-end gap-2">
                        <InputDateTime
                            type="date"
                            value={data?.date_to}
                            size="full"
                            label="Fecha desde:"
                        />
                        <InputDateTime
                            type="time"
                            value={data?.date_to}
                            size="full"
                        />
                    </div>
                    <Input
                        value={data?.to_email}
                        type="email"
                        size="full"
                        label="Enviar al correo:"
                    />
                </div>
                <div>
                    <InputListbox
                        name="format"
                        label="Formato:"
                        items={formatList}
                        defaultValue={data?.format}
                    />
                    <div className="flex items-end gap-2">
                        <InputDateTime
                            type="date"
                            value={data?.date_to}
                            size="full"
                            label="Fecha hasta:"
                        />
                        <InputDateTime
                            type="time"
                            value={data?.date_to}
                            size="full"
                        />
                    </div>
                </div>
            </div>
            <FormActions edit={true} />
        </FormWrapper>
    );
}
