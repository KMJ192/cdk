import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const theme = request.url
    .replace(request.nextUrl.origin, '')
    .replace('/api/theme?theme=', '');

  cookies().set('theme', theme, { maxAge: Infinity });

  const response = NextResponse.json({
    theme,
  });

  response.cookies.set({
    name: 'theme',
    value: theme,
    maxAge: Infinity,
  });

  return response;
}
