export default function ContactItem({ logoSrc, linkSrc, children }) {
  return (
    <div className="flex space-x-3">
      <img src={logoSrc} width="50"></img>
      <a
        href={linkSrc}
        target="_blank"
        rel="noreferrer"
        className="text-xl my-auto"
      >
        <h1>{children}</h1>
      </a>
    </div>
  );
}
