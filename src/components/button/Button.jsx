import "../button/Button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon: Icon,
  style,
}) {
  return (
    <button
      type={type}
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (
        <span className="btn-icon">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
}
