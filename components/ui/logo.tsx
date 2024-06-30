import Link from "next/link";
export default function Logo() {
  return (
    <Link className="block" href="/">
      <img src="../../public/logo.png" alt="logo-img" width={200} height={200} />
    </Link>
  );
}
