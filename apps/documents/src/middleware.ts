import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get('theme')?.value ?? 'light';

  response.cookies.set('theme', theme, { maxAge: Infinity });

  return response;
}

export const config = {
  matcher: '/:path*',
};
