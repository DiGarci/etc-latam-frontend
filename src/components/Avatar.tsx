import { superClassNames } from "@/utils/superClassNames";

interface AvatarProps {
    firstName: string;
    lastName: string;
    size?: "small" | "medium" | "large";
}

export default function Avatar({ firstName, lastName, size }: AvatarProps) {
    const nameInitials = `${firstName[0]}${lastName[0]}`.toLocaleUpperCase();

    const sizes = {
        small: "w-10 h-10 text-base",
        medium: "w-12 h-12 text-xl",
        large: "w-28 h-28 text-4xl",
    };

    return (
        <div>
            <div
                className={superClassNames(
                    size ? sizes[size] : sizes.small,
                    "flex items-center justify-center overflow-hidden bg-[#EAEAEA] rounded-md select-none"
                )}
            >
                <span className="font-medium text-[#666666]">
                    {nameInitials}
                </span>
            </div>
        </div>
    );
}
