import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMeta = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  tech?: string[];
};

export type Project = {
  meta: ProjectMeta;
  content: string;
};

const contentDir = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        meta: {
          ...(data as ProjectMeta),
          slug: data.slug || file.replace(/\.mdx$/, ""),
        },
        content,
      };
    });
}

export function getProjectBySlug(
  slug: string
): { meta: ProjectMeta; content: string } | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      ...data,
      slug: data.slug || slug,
    } as ProjectMeta,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
