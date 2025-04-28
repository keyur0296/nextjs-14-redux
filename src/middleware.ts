import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = ['/login', '/signup', 'verify-email'].includes(path);
    
    // const token = request.cookies.get("token")?.value || '';
    const token = 'some_authentication_token';

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
//   matcher: '/about/:path*',
    matcher: [
        '/',
        '/login',
        '/singup',
        '/verify-email',
        '/profile',
    ]
}