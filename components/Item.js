import Icon from "./Icon";

export default function Item({ text, src, size, description, children }) {
  return (
    <div className="flex content-center">
      <Icon src={src} size={size}></Icon>
      <div>
        <h1 className="text-lg sm:text-2xl align-middle mx-5">{text}</h1>
        {description && (
          <h1 className="text-lg sm:text-1xl mx-8">{"- " + description}</h1>
        )}
      </div>
    </div>
  );
}
