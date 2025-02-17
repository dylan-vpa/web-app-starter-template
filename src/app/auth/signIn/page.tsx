//Next.
import Link from "next/link";
//Components.
import { Button } from "@/core/components/ui/Button";
import { Input } from "@/core/components/ui/Input";
import { FormMessage } from "@/auth/components/ui/formMessage";
//Supabase.
import { signInAction } from "@/auth/lib/actions";
//Utils(Interfaces).
import type { Message } from "@/auth/lib/interfaces/components";

//Login Page.
export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64 max-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <label htmlFor="email">Email</label>
        <Input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <div className="flex justify-between items-center">
          <Link
            className="text-xs text-foreground underline"
            href="/auth/forgotPassword"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          type="submit"
          pendingText="Signing In..."
          formAction={signInAction}
        >
          Sign in
        </Button>
        <p className="text-sm text-foreground">
          Dont have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/auth/signUp"
          >
            Sign up
          </Link>
        </p>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
