import Icon from "./Icon";

export default function Item({ text, src, size }) {
  return (
    <div className="flex content-center">
      <Icon src={src} size={size}></Icon>
      <h1 className="text-lg sm:text-2xl align-middle mx-5">{text}</h1>
    </div>
  );
}
