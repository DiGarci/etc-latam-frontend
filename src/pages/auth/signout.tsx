import { useRouter } from "next/router";

export default function Logout() {
    const { push } = useRouter();
    push("/auth/signin");

    return <div>Logging out...</div>;
}
