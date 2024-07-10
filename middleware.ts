import { clerkMiddleware, createRouteMatcher  } from "@clerk/nextjs/server";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/','/courses',
  '/course_preview/(.*)'
])

export default clerkMiddleware ((auth, req)=>{
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  // publicRoutes: ['/','/courses','/course_preview/(.*)'],
  if (isProtectedRoute(req)) auth().protect();
});
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};