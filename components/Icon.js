export default function Icon({ src, size = 50 }) {
  return (
    <div>
      <img src={src} alt="Icon" width={size} className="aspect-auto"></img>
    </div>
  );
}
