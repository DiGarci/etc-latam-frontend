import { IconSquareRoundedPlus } from "@tabler/icons-react";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

export default function CreateShortcutButton() {
    return (
        <Dropdown header={<IconSquareRoundedPlus />}>
            <DropdownItem href="/report/create" title="Crear Reporte" />
            <DropdownItem href="/user/create" title="Crear Usuario" />
            <DropdownItem href="/role/create" title="Crear Role" />
            <DropdownItem href="/client/create" title="Crear Cliente" />
            <DropdownItem
                href="/incident-type/create"
                title="Crear Tipo de Incidente"
            />
            <DropdownItem href="/country/create" title="Crear País" />
            <DropdownItem href="/city/create" title="Crear Ciudad" />
        </Dropdown>
    );
}
