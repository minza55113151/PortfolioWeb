export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-sm sm:text-xl hover:text-red-500 px-4">
        {children}
      </a>
    </li>
  );
}
