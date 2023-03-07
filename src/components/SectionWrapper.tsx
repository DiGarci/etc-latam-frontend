import { superClassNames } from "@/utils/superClassNames";
import { ReactNode } from "react";

interface ISectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    padding?: "small" | "medium" | "large";
    size?: "small" | "medium" | "full" | "auto";
    background?: "white" | "transparent";
    children: ReactNode;
}

const padding = {
    small: "p-5",
    medium: "px-10 py-8",
    large: "px-24 py-8",
};

const sizes = {
    small: "w-1/2",
    medium: "w-2/3",
    full: "w-full min-w-full",
    auto: "w-auto min-w-[500px]",
};

export default function SectionWrapper(props: ISectionWrapperProps) {
    return (
        <section
            className={superClassNames(
                props.background === "white" ? "bg-white" : "bg-transparent",
                props.padding ? padding[props.padding] : padding.large,
                props.size ? sizes[props.size] : sizes.full,
                "rounded-md inline-block"
            )}
        >
            {props.children}
        </section>
    );
}
