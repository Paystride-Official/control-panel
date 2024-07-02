import Login from "./(auth)/login/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-7 mt-10">
      <Login />
    </main>
  );
}
