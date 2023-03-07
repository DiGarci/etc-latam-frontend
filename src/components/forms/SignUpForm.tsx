import Button from "@/components/Button";
import { setDefaultValues } from "@/utils/defaultValues";
import { ChangeEvent, useState } from "react";
import Input from "../Input";
import FormWrapper from "./FormWrapper";

export default function SignUpForm() {
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
                <h1 className="my-12 text-5xl font-semibold">Crear cuenta</h1>
                <Input
                    type="text"
                    name="first_name"
                    label="Nombre:"
                    placeholder="e.g. Juan"
                    onChange={handleInputValueChange}
                />
                <Input
                    type="text"
                    name="last_name"
                    label="Apellido:"
                    placeholder="e.g. Pérez"
                    onChange={handleInputValueChange}
                />
                <Input
                    type="text"
                    name="email"
                    label="Nombre de usuario:"
                    placeholder="e.g. juanperez"
                    onChange={handleInputValueChange}
                />
                <Input
                    type="password"
                    name="password"
                    label="Contraseña:"
                    onChange={handleInputValueChange}
                />
                <Input
                    type="password"
                    name="confirm_password"
                    label="Confirmar contraseña:"
                    onChange={handleInputValueChange}
                />

                <Button mode="danger" size="medium" value="Crear cuenta" />
            </div>
        </FormWrapper>
    );
}
