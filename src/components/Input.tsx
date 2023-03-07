import { superClassNames } from "@/utils/superClassNames";
import { ReactNode } from "react";

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: "text" | "password" | "email" | "number";
    size?: "full" | "large" | "small" | "medium";
    focus?: boolean;
    name?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    message?: string;
    disabled?: boolean;
    children?: ReactNode;
}

const sizes = {
    full: "w-full",
    large: "w-[500px]",
    medium: "w-[400px]",
    small: "w-[250px]",
};

export default function Input(props: IInputProps) {
    const placeholders = {
        text: "Placeholder",
        password: "••••••••••••",
        email: "ejemplo@correo.com",
        number: "Número",
    };
    const placeholder = props?.placeholder || placeholders[props.type];

    return (
        <div
            className={superClassNames(
                props.size ? sizes[props.size] : sizes.medium,
                "relative py-2"
            )}
        >
            {props?.label && (
                <div className="mb-2 label">
                    <label
                        htmlFor={props.name}
                        className="block text-base font-medium text-[#1A1A1A]"
                    >
                        {props.label}
                    </label>
                </div>
            )}
            <div className="flex p-4 w-full rounded-md bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                <input
                    type={props?.type}
                    name={props?.name}
                    id={props?.name}
                    value={props?.value}
                    placeholder={placeholder}
                    className="w-full text-sm bg-transparent outline-none"
                    autoFocus={props.focus}
                    // onChange={props?.onChange}
                    disabled={props?.disabled}
                />
            </div>
            <div>
                {props?.message && (
                    <span className="block mt-2 text-sm text-red-500">
                        {props.message}
                    </span>
                )}
                {props?.children}
            </div>
        </div>
    );
}
