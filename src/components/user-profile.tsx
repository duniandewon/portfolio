import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  avatarUrl: string;
  name: string;
  title: string;
}

export function UserProfile({ avatarUrl, name, title }: Props) {
  const initials = name
    .split(" ")
    .map((name) => name[0])
    .join("").toUpperCase();

  return (
    <div className="grid max-lg:grid-cols-[auto_1fr] lg:justify-items-center items-center gap-2">
      <div className="h-10 w-10 overflow-hidden rounded-full lg:h-35 lg:w-35">
        <Avatar className="h-full w-full">
          <AvatarImage src={avatarUrl} alt="profile" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>
      <div className="lg:text-center">
        <h2 className="text-md lg:text-3xl font-medium">{name}</h2>
        <p className="max-lg:text-sm">{title}</p>
      </div>
    </div>
  );
}
