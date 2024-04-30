import SignInWithGoogle from "@/components/auth/SignInWithGoogleButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="w-100 bg-zinc-900 p-12 rounded-xl	">
        <h1 className="font-semibold text-6xl text-center mb-4">
          Hold My Links
        </h1>
        <p className="text-center mb-8">
          Keep your links organised for better reference
        </p>
        <div className="text-center">
          <SignInWithGoogle />
        </div>
      </div>
    </main>
  );
}
