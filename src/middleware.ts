/**
 * Middleware for DGL
 * TODO: Implement protected routes and RBAC
 */

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // TODO: Add authentication checks
  // TODO: Implement role-based access control
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
  ],
};
