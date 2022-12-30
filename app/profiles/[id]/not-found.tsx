export default function NotFound() {
  return (
    <div className="p-16">
      <article className="bg-white border border-gray-300 border-solid rounded-lg p-6">
        {/* Title */}
        <p className="font-bold text-black text-2xl">Utente</p>
        {/* Content */}
        <div className="mt-4 flex flex-col gap-1">
          <p>Utente non trovato..</p>
        </div>
      </article>
    </div>
  );
}
