import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p>Welcome to the meals page!</p>
      <p>
        <Link href="/meals/share">Go to Share Page</Link>
      </p>
    </div>
  );
}
