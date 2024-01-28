export default function Layout({
  children,
  route1,
  route2,
}: {
  children: React.ReactNode
  route1: React.ReactNode
  route2: React.ReactNode
}) {
  return (
    <>
      {children}
      {route1}
      {route2}
    </>
  )
}