import Link from "next/link";

import { GithubIcon } from "@/assets/icons/github-icon";
import { LinkedinIcon } from "@/assets/icons/linkedin-icon";

import { UserProfile } from "@/components/user-profile";

export function SideBar() {
  return (
    <aside className="max-lg:flex items-center justify-between px-4 py-4 max-lg:border-b lg:border-r border-primary/40 lg:space-y-4">
      <UserProfile
        avatarUrl="https://github.com/shadcn.png"
        name="Mohammad Baragbah"
        title="Softwear Engineer"
      />
      <div className="flex justify-center gap-4">
        <Link
          href="https://github.com/duniandewon/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <GithubIcon className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/duniandeown/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
      </div>
    </aside>
  );
}
