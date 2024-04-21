import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/home(.*)', // Semua rute di bawah '/home' harus dilindungi
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Jangan jalankan middleware pada file statis
    '/', // Rute '/' bisa diakses publik
    '/(api|trpc)(.*)', // Jalankan middleware pada rute API
  ],
};
