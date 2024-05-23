import { authMiddleware } from "@clerk/nextjs";

authMiddleware({
  publicRoutes: ["/site", '/api/uploadthing'],
  async beforeAuth(auth:any,req:any){},
  async afterAuth(auth:any,req:any){},
  
  debug: true,
});

export default authMiddleware;
const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
