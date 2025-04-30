export const metadata = {
  title: 'CS391 GitHub Login',
  description: 'OAuth project for CS391 using GitHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
