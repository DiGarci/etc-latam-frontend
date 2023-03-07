import Button from "@/components/Button";
import { setDefaultValues } from "@/utils/defaultValues";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Input from "../Input";
import FormWrapper from "./FormWrapper";

export default function SignInForm() {
    const defaultValues = setDefaultValues({}, "");
    const [inputValues, setInputValues] = useState(defaultValues);

    const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) =>
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });

    const handleSubmit = (e: ChangeEvent<HTMLFormControlsCollection>) => {
        e.preventDefault();
        console.log(inputValues);
    };

    return (
        <FormWrapper position="center" onSubmit={handleSubmit}>
            <div className="p-5">
                <h1 className="my-12 text-5xl font-semibold">Iniciar sesión</h1>
                <Input
                    type="email"
                    name="email"
                    label="Correo electrónico o nombre de usuario:"
                    onChange={handleInputValueChange}
                />
                <Input
                    type="password"
                    name="password"
                    label="Contraseña:"
                    onChange={handleInputValueChange}
                />
                <Link
                    href="/auth/forgot-password"
                    className="float-right mt-2 text-sm text-[#4c49f3]"
                >
                    ¿Olvidaste tu contraseña?
                </Link>

                <Button mode="danger" size="medium" value="Iniciar sesión" />
            </div>
        </FormWrapper>
    );
}
