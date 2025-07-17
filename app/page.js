import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Go to Meals Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Go to Share Meal Page</Link>
      </p>
      <p>
        <Link href="/community">Go to Community Page</Link>
      </p>
    </main>
  );
}
