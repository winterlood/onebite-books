import { ReactNode } from "react";
import style from "./books-layout.module.css";
import Link from "next/link";
import { CATEGORIES } from "@/contants";
import { usePathname } from "next/navigation";

const categoryMap: Record<
  string,
  { path: string; displayName: string }
> = {
  ALL: {
    path: "",
    displayName: "전체",
  },
  FE: {
    path: "fe",
    displayName: "FrontEnd",
  },
  BE: {
    path: "be",
    displayName: "BackEnd",
  },
};

export default function BooksLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const currentCategory = pathname.split("/").at(2);

  return (
    <div className={style.container}>
      <div className={style.category_section}>
        {["ALL", ...CATEGORIES].map((category) => {
          const { path, displayName } = categoryMap[category];
          let isOn = currentCategory === path;
          if (currentCategory === undefined && path === "") {
            isOn = true;
          }
          return (
            <Link
              key={`category-bar-${category}`}
              href={`/books/${categoryMap[category].path}`}
              className={`${style.category_item} ${
                isOn ? style.category_item_on : ""
              }`}
            >
              <div>{displayName}</div>
            </Link>
          );
        })}
      </div>
      <div className={style.main_section}>{children}</div>
    </div>
  );
}
