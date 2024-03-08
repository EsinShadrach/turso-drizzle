import {
  createrViaORM,
  getUserFromDb,
  getUsersViaORM,
} from "~/actions/get-user-table";

export default async function Home() {
  // const users = await getUserFromDb();
  const users = await getUsersViaORM();

  return (
    <form action={createrViaORM} className="max-w-md">
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>

      <button className="px-5 py-2 bg-indigo-100 rounded-md transition-all duration-300 active:scale-95">
        CREATE USER
      </button>
      <input type="text" name="name" className="border" />
    </form>
  );
}
