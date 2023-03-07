import Button from "@/components/Button";
import { setDefaultValues } from "@/utils/defaultValues";
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
                <h1 className="my-12 text-5xl font-semibold">
                    Recuperar cuenta
                </h1>

                <Input
                    type="email"
                    name="email"
                    label="Correo electrónico o nombre de usuario:"
                    onChange={handleInputValueChange}
                />

                <Button
                    mode="normal"
                    type="submit"
                    size="medium"
                    value="Enviar Correo"
                />
            </div>
        </FormWrapper>
    );
}
