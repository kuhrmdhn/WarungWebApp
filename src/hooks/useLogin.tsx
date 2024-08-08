import { useToast } from "@chakra-ui/react";
import { useUserRole } from "./useUserRole";
import { Error } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useLogin() {
    const toast = useToast();
    const { push } = useRouter();
    const userRole = useUserRole();

    async function login(username: string, password: string) {
        if (username === "" || password === "") {
            toast({
                title: "Input can't be empty",
                colorScheme: "red",
                icon: <Error />,
                duration: 3000,
                position: "top-right"
            });
            return;
        }

        const res = await signIn('credentials', {
            redirect: false,
            username: username,
            password: password,
        });

        if (res && res.ok) {
            switch (userRole) {
                case "CASHIER":
                    push("/cashier");
                    return;
                case "OWNER":
                    push("/owner");
                    return;
                case "CHEF":
                    push("/chef");
                    return;
            }
        } else if (res && res.error) {
            toast({
                title: "Failed Login",
                colorScheme: "red",
                icon: <Error />,
                duration: 3000,
                position: "top-right"
            });
        }
    }

    return login;
}
