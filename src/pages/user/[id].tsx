import Avatar from "@/components/Avatar";
import SectionWrapper from "@/components/SectionWrapper";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function User() {
    const router = useRouter();
    const { id } = router.query;
    const { user } = useAuth();
    const fullName = `${user?.firstName} ${user?.lastName}`;

    return (
        <SectionWrapper>
            <div className="flex items-center gap-5">
                <Avatar size="large" firstName="John" lastName="Doe" />
                <span className="text-2xl font-medium">
                    Nombre del Usuario (@{id})
                </span>
            </div>
        </SectionWrapper>
    );
}
