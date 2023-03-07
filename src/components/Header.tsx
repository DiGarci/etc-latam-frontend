import { useAuth } from "@/hooks/useAuth";
import {
    IconLogout,
    IconSettings,
    IconSquareRoundedPlus,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import Avatar from "./Avatar";
import CreateShortcutButton from "./CreateShortcutButton";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Language from "./Language";
import Logo from "./Logo";

export default function Header() {
    const { user } = useAuth();

    return (
        <header className="inset-x-0 flex items-center px-24 py-2 text-base font-medium bg-white border-b select-none">
            <div>
                <Logo />
            </div>
            <div className="w-full">
                <nav>
                    <ul className="flex items-center justify-end gap-4">
                        {user ? (
                            <>
                                <li>
                                    <CreateShortcutButton />
                                </li>
                                {user.role === "admin" && (
                                    <li>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </li>
                                )}
                                <li>
                                    <Dropdown header="Tickets">
                                        <DropdownItem
                                            href="/tickets/create"
                                            title="Crear Ticket"
                                        />
                                        <DropdownItem
                                            href="/tickets?filter_by=inbox"
                                            title="Bandeja de Entrada"
                                        />
                                        <DropdownItem
                                            href="/tickets?filter_by=mine"
                                            title="Mis Tickets"
                                        />
                                        <DropdownItem
                                            href="/tickets?overdue=true"
                                            title="Atrasados"
                                        />
                                        <DropdownItem
                                            href="/tickets?assigned=false"
                                            title="No asignados"
                                        />
                                        <DropdownItem
                                            href="/tickets?closed=true"
                                            title="Cerrados"
                                        />
                                        <DropdownItem
                                            href="/tickets?deleted=true"
                                            title="Papelera"
                                        />
                                    </Dropdown>
                                </li>
                                {user.role === "admin" && (
                                    <>
                                        {/* <li>
                                            <Dropdown header="Usuarios">
                                                <DropdownItem
                                                    href="/user/list"
                                                    title="Usuarios"
                                                />
                                                <DropdownItem
                                                    href="/client/list"
                                                    title="Organizaciones"
                                                />
                                            </Dropdown>
                                        </li> */}
                                        <li>
                                            <Dropdown header="Administración">
                                                <DropdownItem
                                                    href="/user/list"
                                                    title="Usuarios"
                                                />
                                                <DropdownItem
                                                    href="/client/list"
                                                    title="Clientes"
                                                />
                                                <DropdownItem
                                                    href="/country/list"
                                                    title="Países"
                                                />
                                                <DropdownItem
                                                    href="/city/list"
                                                    title="Ciudades"
                                                />
                                                <DropdownItem
                                                    href="/role/list"
                                                    title="Roles"
                                                />
                                                <DropdownItem
                                                    href="/incident-type/list"
                                                    title="Tipos de Incidentes"
                                                />
                                            </Dropdown>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Link href="/report/list">Informes</Link>
                                </li>
                                <li>
                                    <Language />
                                </li>
                                <li>
                                    <Dropdown
                                        header={
                                            <Avatar
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                            />
                                        }
                                    >
                                        <DropdownItem
                                            icon={IconUser}
                                            href="/profile"
                                            title="Mi Perfil"
                                        />
                                        <DropdownItem
                                            icon={IconSettings}
                                            href="/account/settings"
                                            title="Configuración"
                                        />
                                        <DropdownItem
                                            icon={IconLogout}
                                            href="/auth/signout"
                                            title="Cerrar Sesión"
                                        />
                                    </Dropdown>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contacto</Link>
                                </li>
                                <li>
                                    <Link href="/auth/signin">
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/auth/signup">Registrarse</Link>
                                </li> */}
                                <li>
                                    <Language />
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
