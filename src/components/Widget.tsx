import Link from "next/link";
import HeadingTitle from "./HeadingTitle";

export default function Widget({
    title,
    value,
    href,
}: {
    title: string;
    value: string;
    href: string;
}) {
    return (
        <div className="bg-[#D9D9D9] rounded-md font-medium select-none">
            <Link className="block py-5 pl-8 pr-12" href={href}>
                <div>
                    <span className="text-4xl">{value}</span>
                </div>
                <div>
                    <h3 className="mt-2 text-lg">{title}</h3>
                </div>
            </Link>
        </div>
    );
}
