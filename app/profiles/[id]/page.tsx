import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Card from "../../components/Card";
import TextRow from "../../components/TextRow";

const Profile = async (props: any) => {
  const url = `https://jsonplaceholder.typicode.com/users/${props.params.id}`;
  const res = await fetch(url);

  if (!res.ok) {
    notFound();
  }
  const utente = await res.json();

  return (
    <Card title="User">
      <div className="mt-4 flex flex-col gap-1">
        <TextRow label="Nome:" value={utente.name} />
        <TextRow label="Username:" value={utente.username} />
        <TextRow label="Email:" value={utente.email} />
        <TextRow label="Website:" value={utente.website} />
        <TextRow label="Company Name:" value={utente.company.name} />
      </div>
      {/* Button */}
      <div className="mt-8">
        <Link
          href={`/profiles/${Number(props.params.id) + 1}`}
          className="rounded-lg font-medium uppercase text-xs text-white bg-green-500 px-16 py-2 "
        >
          Next
        </Link>
      </div>
    </Card>
  );
};

export default Profile;
