import InputText from "@/components/Input";
import { useState } from "react";
// import { changePassword } from "../utils/authAPI";
// import { resetPassword } from "../utils/userAPI";

export default function ChangePassword({
    user,
    reset,
    token,
    redirect,
}: {
    user?: any;
    reset?: boolean;
    token: string;
    redirect?: boolean;
}) {
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleInputPasswordChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => setPassword({ ...password, [e.target.name]: e.target.value });
    const handleChangePasswordForm = (
        e: React.ChangeEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (
            password.newPassword === "" ||
            password.confirmPassword === "" ||
            (password.currentPassword === "" && !reset)
        ) {
            setMessage("Complete los campos");
        } else if (password.newPassword !== password.confirmPassword) {
            setMessage("Las contraseñas no coinciden");
        } else if (password.newPassword.length < 8) {
            setMessage("La contraseña debe tener al menos 8 caracteres");
        } else if (password.currentPassword === password.newPassword) {
            setMessage("La contraseña nueva debe ser diferente a la actual");
        } else {
            setMessage("");
            if (!reset)
                changePassword(
                    user?.username,
                    password.currentPassword,
                    password.newPassword
                );
            else resetPassword(password.confirmPassword, token);
            if (redirect) window.location.href = "/signin";
        }
    };

    return (
        <>
            <form
                method="post"
                className="grid gap-5"
                onSubmit={handleChangePasswordForm}
            >
                {!reset && (
                    <InputText
                        label="Contraseña actual:"
                        name="currentPassword"
                        type="password"
                        placeholder="••••••••••••"
                        onChange={handleInputPasswordChange}
                    />
                )}
                <InputText
                    label="Nueva contraseña:"
                    name="newPassword"
                    type="password"
                    placeholder="••••••••••••"
                    onChange={handleInputPasswordChange}
                />
                <InputText
                    label="Confirmar nueva contraseña:"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••••••"
                    onChange={handleInputPasswordChange}
                />
                {message && <span className="text-red-500">{message}</span>}
                <button className="relative rounded-md hover:bg-[#4441EB] text-white bg-[#4c49f3] cursor-pointer outline-none mt-4 py-4 px-12">
                    Cambiar contraseña
                </button>
            </form>
        </>
    );
}
