import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[60px] bg-slate-700 flex justify-center items-center gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/user"}>Users</Link>
      <Link href={"/user/register"}>Register</Link>
    </div>
  );
}
