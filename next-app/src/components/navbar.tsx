import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[70px] bg-pink-300 gap-6">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/user"}>User</Link>
    </div>
  );
}
