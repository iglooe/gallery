export default function HomePage() {
  const mockPosts = [
    "https://utfs.io/f/2206d9b2-41e1-412d-918c-5fc9a953475c-b4u6ep.jpg",
    "https://utfs.io/f/9a51d2da-f9b1-473a-a628-bfb0dde8397b-62ica2.jpg",
    "https://utfs.io/f/a2abec2c-f76c-4922-bdab-18c27aabfd62-s4tbse.jpg",
    "https://utfs.io/f/f4a5f11c-11c2-4dfe-8078-474a1d583235-x3w4ag.jpg",
    "https://utfs.io/f/35bebf83-8689-42fd-93b8-a140911a5ef5-c1ybdf.jpg",
    "https://utfs.io/f/17c589e9-8862-42eb-9dd4-95f2a422bae9-4y0u0a.jpg",
  ];

  const mockImages = mockPosts.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
