export default function CustomInput({ label, invalid, ...props }) {
  let labelClassName = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClassName = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClassName += " text-red-500";
    inputClassName += " border-red-500 text-red-500 bg-red-100";
  } else {
    labelClassName += " text-stone-500";
    inputClassName += " border-stone-500 text-stone-900 bg-stone-100";
  }

  return (
    <p>
      <label className={labelClassName}>{label}</label>
      <input className={inputClassName} {...props} />
    </p>
  );
}
