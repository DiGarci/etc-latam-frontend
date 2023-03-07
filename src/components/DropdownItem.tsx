import Link from "next/link";

interface IDropdownItemProps {
    title: string;
    href: string;
    icon?: any;
}

export default function DropdownItem(props: IDropdownItemProps) {
    return (
        <Link
            key={props.title}
            href={props.href}
            className="flex items-start px-2 py-2 rounded-lg"
        >
            {/* <props.icon
                className="flex-shrink-0 w-6 h-6 text-[#1A1A1A]"
                aria-hidden="true"
            /> */}
            <div className="ml-2">
                <p className="text-gray-900">{props.title}</p>
            </div>
        </Link>
    );
}
