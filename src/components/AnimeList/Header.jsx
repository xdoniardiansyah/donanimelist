import Link from "next/link";

const Header = ({ title, LinkHref, LinkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {LinkHref && LinkTitle ? (
        <Link
          href={LinkHref}
          className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
``;
