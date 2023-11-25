import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({
    response: 'cdkit 문서다. ^--------   ^',
  });

  return response;
}
