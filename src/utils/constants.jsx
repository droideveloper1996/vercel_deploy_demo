import { AdminRouter } from "../routers/admin-router";
import { AppRouter } from "../routers/app-router";
import { FallbackRouter } from "../routers/fallback-router";
import { StudentRouter } from "../routers/student-router";

export const AppRoutes = [
  {
    subdomain: "www",
    router: AppRouter,
    default: true,
  },
  {
    subdomain: "admin",
    router: AdminRouter,
    default: false,
  },
  {
    subdomain: "student",
    router: StudentRouter,
    default: false,
  },
  {
    subdomain: "fallback",
    router: FallbackRouter,
    default: false,
  },
];
