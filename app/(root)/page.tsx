type album = {
  id: number;
  title: string;
  userId: number;
};

export default async function Home() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!resp.ok) throw new Error("There was an error fetching");
  const albums = await resp.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: album) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 transition t..."
        >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
}
