import { SideBar } from "@/components/side-bar";

export default function Home() {
  const images = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1018/300/400",
    "https://picsum.photos/id/1022/400/500",
    "https://picsum.photos/id/1024/300/200",
    "https://picsum.photos/id/1027/500/400",
    "https://picsum.photos/id/1035/300/300",
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1018/300/400",
    "https://picsum.photos/id/1022/400/500",
    "https://picsum.photos/id/1027/500/400",
    "https://picsum.photos/id/1035/300/300",
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1018/300/400",
    "https://picsum.photos/id/1022/400/500",
  ];

  return (
    <div className="h-dvh overflow-hidden grid lg:grid-cols-[auto_1fr] max-lg:grid-rows-[auto_1fr]">
      <SideBar />
      <main className="p-4 grid grid-rows-[auto_1fr] gap-4">
        <header className="bg-gray-800 rounded-lg shadow-xl">
          <p className="text-center text-sm text-gray-400 mt-2 p-4">
            A filter component to filter projects based on technologies will go
            here
          </p>
        </header>
        <div className="h-[calc(100dvh-10.9rem)] lg:h-[calc(100dvh-6.5rem)] overflow-y-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`A random image ${index}`}
                className="w-full rounded-lg shadow-xl transition-transform animate-fadeIn"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
