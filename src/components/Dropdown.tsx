import { superClassNames } from "@/utils/superClassNames";
import { Popover, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Fragment, ReactNode } from "react";

interface IDropdownProps {
    header: string | ReactNode;
    children: ReactNode;
}

export default function Dropdown(props: IDropdownProps) {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={superClassNames(
                            open ? "text-gray-900" : "",
                            "inline-flex align-middle items-center outline-none"
                        )}
                    >
                        {props.header}
                        {typeof props.header === "string" && (
                            <IconChevronDown className="ml-[2px]" size={"18"} />
                        )}
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 w-52">
                            <div className="relative grid gap-1 p-2 bg-white border-[1px] rounded-md">
                                {props.children}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
