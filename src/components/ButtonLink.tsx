import Link from "next/link";

interface IButtonProps {
    value: string;
    size?: "small" | "medium" | "large";
    href?: string;
}

export default function ButtonLink(props: IButtonProps) {
    return (
        <div>
            <Link
                href={`${props.href}`}
                className="px-5 py-4 text-white text-md bg-[#203559] rounded-md select-none"
            >
                {props.value}
            </Link>
        </div>
    );
}
