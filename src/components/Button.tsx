import { ButtonProps } from "@/interfaces/type";
import { superClassNames } from "@/utils/superClassNames";

const padding = {
    small: "px-2 py-2 my-2",
    medium: "px-5 py-4 my-5",
    large: "px-7 py-6 my-7",
};

const colors = {
    danger: "bg-[#F85656]",
    normal: "bg-[#203559]",
    success: "bg-[#E0622C]",
    warning: "bg-[#F8A856]",
    cancel: "bg-[#EAEAEA] !text-[#1A1A1A]",
};

const sizes = {
    large: "w-[500px]",
    medium: "w-[400px]",
    small: "w-[250px]",
    full: "w-full",
    auto: "w-auto",
};

export default function Button(props: ButtonProps) {
    return (
        <div>
            <button
                type={props.type || "button"}
                className={superClassNames(
                    props.size ? sizes[props.size] : sizes.auto,
                    props.type ? colors[props.mode] : colors.normal,
                    props.padding ? padding[props.padding] : padding.medium,
                    `text-white text-md font-medium rounded-md select-none flex items-center justify-center gap-2`
                )}
                onClick={props.onClick}
            >
                {props.icon && <props.icon size="1.2rem" />}
                {props.value}
            </button>
        </div>
    );
}
