import { authMiddleware } from "@clerk/nextjs";

authMiddleware({
  publicRoutes: ["/site", '/api/uploadthing'],
  debug: true,
});

export default authMiddleware;
const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
