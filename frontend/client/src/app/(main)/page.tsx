import AlbumSection from "@/components/album-section";

export default function Home() {
  return (
    <main className="px-5 pt-3">
      {/* Featured Section */}

      <section>
        <h5 className="mb-3 text-2xl font-bold text-white">New Release</h5>
        <AlbumSection pageSize={7} pageNo={1} />
      </section>
    </main>
  );
}
