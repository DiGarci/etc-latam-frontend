import Avatar from "@/components/Avatar";
import SectionWrapper from "@/components/SectionWrapper";
import { useAuth } from "@/hooks/useAuth";

export default function Profile() {
    const { user } = useAuth();
    const fullName = `${user?.firstName} ${user?.lastName}`;

    return (
        <SectionWrapper>
            <div className="flex items-center gap-5">
                <Avatar size="large" firstName="John" lastName="Doe" />
                <span className="text-2xl font-medium">
                    {fullName} (@{user.username})
                </span>
            </div>
        </SectionWrapper>
    );
}
