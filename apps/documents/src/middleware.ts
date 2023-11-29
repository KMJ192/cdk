import { NextRequest, NextResponse, userAgent } from 'next/server';
import { themeCookieMaxAge } from './utils/utils';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const device = userAgent({ headers: request.headers });

  const theme = request.cookies.get('theme')?.value ?? 'light';

  response.cookies.set('theme', theme, { maxAge: themeCookieMaxAge });

  if (device.ua.match(/Mobile|Android/i)) {
    response.cookies.set('device', 'mobile', { maxAge: Infinity });
  } else {
    response.cookies.set('device', 'pc', { maxAge: Infinity });
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
