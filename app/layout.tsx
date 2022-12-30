import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="w-full bg-green-500 p-4 flex justify-between items-center">
          <p className="font-bold text-xl text-white">Logo</p>
          <ul className="flex gap-4 text-white">
            <Link href={"/profiles"}>Vai a Profili</Link>
          </ul>
        </nav>
        <div className="p-16">{children}</div>
      </body>
    </html>
  );
}
