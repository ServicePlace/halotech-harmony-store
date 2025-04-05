import { authMiddleware } from "@clerk/clerk-react";

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/products",
    "/product/(.*)",
    "/about",
    "/faq",
    "/crypto-guide",
    "/privacy"
  ],
  // Optional: Redirect users to this path when they visit a protected route
  afterSignInUrl: "/dashboard",
  afterSignUpUrl: "/dashboard",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)"],
};
