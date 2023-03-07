import Button from "@/components/Button";
import HeadingTitle from "@/components/HeadingTitle";
import Input from "@/components/Input";
import SectionWrapper from "@/components/SectionWrapper";
import Subtitle from "@/components/Subtitle";

export default function Settings() {
    const user = {
        email: "johndoe@email.com",
    };

    return (
        <SectionWrapper>
            <HeadingTitle title="Configuración" />
            <br />
            <div>
                <Subtitle title="Cambiar contraseña" />
                <p>
                    Asegúrese de que su nueva contraseña tiene al menos 8
                    caracteres, incluidos un número y una letra minúscula.
                </p>
                <form action="" className="py-5 mb-5">
                    <Input type="password" label="Contraseña actual:" />
                    <Input type="password" label="Nueva contraseña:" />
                    <Input
                        type="password"
                        label="Confirmar nueva contraseña:"
                    />
                    <Button
                        type="submit"
                        mode="normal"
                        value="Cambiar contraseña"
                    />
                </form>
            </div>
            <div>
                <Subtitle title="Cambiar correo electrónico" />
                <span>
                    Correo actual: <b>{user.email}</b>
                </span>
                <form action="" className="py-5 mb-5">
                    <Input
                        type="email"
                        label="Nueva dirección de correo electrónico:"
                    />
                    <Button
                        type="submit"
                        mode="normal"
                        value="Cambiar correo electrónico"
                    />
                </form>
            </div>
            <div>
                <Subtitle title="Eliminar cuenta" />
                <p>
                    Al dar click en el botón de abajo, se eliminará tu cuenta y
                    todos tus datos.
                </p>
                <form action="" className="py-5 mb-5">
                    <Button
                        type="submit"
                        mode="normal"
                        value="Eliminar cuenta"
                    />
                </form>
            </div>
        </SectionWrapper>
    );
}
