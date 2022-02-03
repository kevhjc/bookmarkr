interface Props {
  children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: Props) {
  return <main>{children}</main>
}
