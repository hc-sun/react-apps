export default function Button({
  children,
  textOnly,
  className,
  ...restProps
}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += ` ${className}`;

  return (
    <button className={cssClasses} {...restProps}>
      {children}
    </button>
  );
}
