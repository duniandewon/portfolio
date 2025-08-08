import { ProjectItem } from "@/components/ProjectItem";
import { SideBar } from "@/components/side-bar";

import { getAllProjects } from "@/lib/getAllProjects";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="h-dvh overflow-hidden grid lg:grid-cols-[auto_1fr] max-lg:grid-rows-[auto_1fr] break-inside-avoid">
      <SideBar />
      <main className="p-4 grid grid-rows-[auto_1fr] gap-4 overflow-y-auto">
        <header className="p-4 bg-gray-800 rounded-lg shadow-xl sticky top-0 z-10">
          <p className="text-center text-sm text-gray-400 mt-2 p-4">
            A filter component to filter projects based on technologies will go
            here
          </p>
        </header>
        <div className="masonry-container columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4 h-full">
          {projects.map((project) => (
            <ProjectItem project={project} key={project.meta.slug} />
          ))}
        </div>
      </main>
    </div>
  );
}
