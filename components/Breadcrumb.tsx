import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbWithCustomSeparator() {
  const router = usePathname();

  const routes = [
    { path: "/", label: "خانه" },
    { path: "/profile/me", label: "ناحیه کاربری" },
    { path: "/profile/edit", label: "اطلاعات کاربری" },
    { path: "/profile/message", label: "پیغام‌های من" },
    { path: "/profile/order", label: "سفارشات من" },
    { path: "/profile/recents", label: "بازدید‌های اخیر" },
    { path: "/profile/wishlists", label: "علاقه‌مندی‌های من" },
    { path: "/profile/address", label: "آدرس‌های من" },
  ];

  const currentRoute = routes.find((route) => route.path === router);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {router === "/profile/me" ? (
          <>
            <BreadcrumbSeparator  className="text-customRed -rotate-12" />
            <BreadcrumbItem >
              <BreadcrumbPage>بازگشت</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">خانه</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {router.startsWith("/profile") && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href="/profile/me">ناحیه کاربری</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {router !== "/profile/me" && (
                  <>
                    <BreadcrumbSeparator />
                    {router === "/profile/edit" && (
                      <BreadcrumbItem>
                        <BreadcrumbPage>اطلاعات کاربری</BreadcrumbPage>
                      </BreadcrumbItem>
                    )}
                    {router !== "/profile/edit" && currentRoute && (
                      <BreadcrumbItem>
                        <BreadcrumbPage>{currentRoute.label}</BreadcrumbPage>
                      </BreadcrumbItem>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
