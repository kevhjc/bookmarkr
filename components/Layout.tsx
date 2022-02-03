interface Props {
  children: any
}

export default function Layout({ children }: Props) {
  return <main>{children}</main>
}
