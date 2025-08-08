import { MDXRemote } from "next-mdx-remote/rsc";

import { Project } from "@/lib/getAllProjects";
import { useMDXComponents } from "../../mdx-components";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
    const components = useMDXComponents();
  return (
    <div className="border rounded-md p-4 break-inside-avoid">
      <h3 className="text-lg font-semibold mb-1 text-gray-50">
        {project.meta.title}
      </h3>
      <div className="text-xs text-blue-400 mb-2">
        {project.meta.tech?.join(", ")}
      </div>
      <div className="prose prose-sm dark:prose-invert">
        <MDXRemote source={project.content} components={components} />
      </div>
    </div>
  );
}
