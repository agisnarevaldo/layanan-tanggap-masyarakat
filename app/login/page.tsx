import { Icon } from "@iconify/react/dist/iconify.js";
import FormLogin from "../ui/formLogin";

export default function LoginAdmin() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
                <h1 className="text-3xl text-gray-900 font-bold">LOGIN</h1>
                <Icon icon="raphael:lock" className="text-2xl text-gray-900" />
            </div>
            <FormLogin />
        </div>
    );
}