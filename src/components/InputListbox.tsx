import { InputListboxProps } from "@/interfaces/type";
import { superClassNames } from "@/utils/superClassNames";
import { Listbox, Transition } from "@headlessui/react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { Fragment, useState } from "react";

const sizes = {
    full: "w-full",
    large: "w-[500px]",
    medium: "w-[400px]",
    small: "w-[250px]",
};

export default function InputListbox(props: InputListboxProps) {
    const [selectedItem, setSelectedItem] = useState("Seleccione una opción");

    return (
        <Listbox value={selectedItem} onChange={setSelectedItem}>
            {({ open }) => (
                <>
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
                        <Listbox.Button className="flex px-4 py-3 w-full rounded-md bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                            <p className="p-1 text-sm bg-transparent">
                                {selectedItem}
                            </p>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 w-full py-2 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {props.items?.map((item: any) => (
                                    <Listbox.Option
                                        key={item}
                                        className={({ active }) =>
                                            superClassNames(
                                                active
                                                    ? "text-white bg-indigo-600"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={item}
                                    >
                                        <div className="flex items-center">
                                            <span>{item}</span>
                                        </div>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
