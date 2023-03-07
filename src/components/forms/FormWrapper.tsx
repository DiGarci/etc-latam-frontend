import { superClassNames } from "@/utils/superClassNames";
import SectionWrapper from "../SectionWrapper";

interface IFormWrapperProps
    extends React.HTMLAttributes<HTMLFormControlsCollection> {
    children: React.ReactNode;
    position?: "center" | "left" | "right";
}

const position = {
    center: "items-center justify-center",
    left: "items-start justify-start",
    right: "items-end justify-end",
};

export default function FormWrapper(props: IFormWrapperProps) {
    return (
        <div
            className={superClassNames(
                props.position ? position[props.position] : position.left,
                "min-h-screen w-full flex flex-col"
            )}
        >
            <SectionWrapper background="white" size="auto" padding="small">
                <form className="max-w-[1000px]">{props.children}</form>
            </SectionWrapper>
        </div>
    );
}
