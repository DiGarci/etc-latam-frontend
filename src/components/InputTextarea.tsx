import { superClassNames } from "@/utils/superClassNames";
import { ReactNode } from "react";

interface IInputTextareaProps
    extends React.HTMLAttributes<HTMLTextAreaElement> {
    size?: "full" | "large" | "small" | "medium";
    focus?: boolean;
    name?: string;
    label?: string;
    message?: string;
    disabled?: boolean;
    children?: ReactNode;
}

export default function InputTextarea(props: IInputTextareaProps) {
    const sizes = {
        full: "w-full",
        large: "w-[500px]",
        medium: "w-[400px]",
        small: "w-[250px]",
    };

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
            <div className="flex px-4 py-3 w-full rounded-md bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                <textarea
                    name={props?.name}
                    id={props?.name}
                    placeholder={props?.placeholder || "Placeholder"}
                    className="w-full p-1 text-sm bg-transparent outline-none"
                    autoFocus={props.focus}
                    // onChange={props?.onChange}
                    disabled={props?.disabled}
                >
                    {props?.defaultValue}
                </textarea>
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
