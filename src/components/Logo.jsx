import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-xl font-bold text-gray-600 hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        Extension Con.
      </h2>
    </Link>
  );
};

export default Logo;
