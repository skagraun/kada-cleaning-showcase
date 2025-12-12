// Root layout - minimal wrapper that passes through to locale layout
// The actual layout with providers is in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
