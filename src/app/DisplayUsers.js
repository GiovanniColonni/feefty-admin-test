"use server";
import { getUsers } from "./api/user";

export async function getServerSideProps() {
  const users = await getUsers();
  return { 
    props: { users }
  };
}

export async function DisplayUsers({ users }) {
  return (
    <div div className="bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl">User list</div>
  );
}