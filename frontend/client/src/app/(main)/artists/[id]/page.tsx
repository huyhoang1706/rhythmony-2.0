import ArtistDetail from "./artist-detail";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArtistDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <main className="p-5">
      <ArtistDetail id={id} />
    </main>
  );
}
