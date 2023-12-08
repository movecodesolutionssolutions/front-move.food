import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
// import { useLoginController } from "./useLoginController";

export function Login() {
  // const { handleSubmit, register, errors, isLoading } = useLoginController();

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

        <form className="mt-8 flex flex-col gap-4">
          <Input type="email" placeholder="E-mail" name="email" />

          <Input type="password" placeholder="Senha" name="password" />

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
