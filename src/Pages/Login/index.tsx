import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const userSinginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type userSiginTypesSchema = z.infer<typeof userSinginSchema>;

export function Login() {
  const auth = useAuth();
  const { register, handleSubmit } = useForm<userSiginTypesSchema>({
    resolver: zodResolver(userSinginSchema),
  });

  const handleSingin = async (data: userSiginTypesSchema) => {
    try {
      await auth.authenticate(data.email, data.password);
      <Navigate to="/Dashboard" />;
    } catch (err) {
      toast.error("Senha ou email errado");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <header className="flex flex-col items-center gap-4">
          <p className="space-x-2">
            <span className="text-grape-900 tracking-[-0.5px] leading-6 font-bold">
              MOVE.FOOD
            </span>
          </p>
          <h1 className="text-gray-900 text-2xl font-bold tracking-[-1px]">
            Entre em sua conta
          </h1>
        </header>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(handleSingin)}
        >
          <Input type="email" placeholder="E-mail" {...register("email")} />

          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />

          <Button
            type="submit"
            className="mt-2 bg-grape-900 "
            // isLoading={isLoading}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
