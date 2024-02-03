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
    <div>User list</div>
  );
}