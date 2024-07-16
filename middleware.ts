import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isPrivateRoute = createRouteMatcher(['/GuestBook'])

export default clerkMiddleware((auth,req)=>{
  if(isPrivateRoute((req))){
    auth().protect()
  }
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  
};