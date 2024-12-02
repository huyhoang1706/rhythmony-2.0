import TrackDetail from "./track-detail";

interface Props {
  params: {
    id: string;
    track_id: string;
  };
}

export default async function TrackDetailPage({ params }: Props) {
  const { id, track_id } = await params;
  return <main className="p-5">{/* <TrackDetail albumId={id} trackId={track_id} /> */}</main>;
}
