import Link from "next/link";
import React from "react";
import Card from "../components/Card";
import TextRow from "../components/TextRow";

const ProfilesPage = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const res = await fetch(url);
  const utenti = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      {utenti?.map((utente: any) => (
        <Card key={utente.id} title={utente.name}>
          <div className="mt-4 flex flex-col gap-1">
            <TextRow label="Username:" value={utente.username} />
            <TextRow label="Email:" value={utente.email} />
          </div>
          {/* Button */}
          <div className="mt-8">
            <Link
              href={`/profiles/${utente.id}`}
              className="rounded-lg font-medium uppercase text-xs text-white bg-green-500 px-16 py-2"
            >
              Dettagli
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProfilesPage;
