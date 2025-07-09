export function Button({children, href, ...other}) {
  return (
    <a
      className="btn-1 px-5 py-2 text-sm text-zinc-300 rounded-md bg-zinc-900 tracking-wider cursor-pointer"
      href={href}
      {...other}
    >
      {children}
    </a>
  )
}