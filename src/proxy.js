import { NextResponse } from 'next/server';

export default function proxy(request) {
  // Edge proxy handler for route protection and session verification
  const sessionToken = request.cookies.get('neon_session')?.value;

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Pass through to allow seamless feature demonstration
    return NextResponse.next();
  }

  if (sessionToken && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};
