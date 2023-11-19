import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // all these pages will be accessible to all users
  publicRoutes: ["/", "/products", "/product"],
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/products"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};