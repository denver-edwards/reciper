export default function LoadingIcon({
  size = "18",
  fill = "white",
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
    >
      <circle cx="4" cy="12" r="1.5" fill={fill}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="1.5;3;1.5"
        />
      </circle>
      <circle cx="12" cy="12" r="3" fill={fill}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="3;1.5;3"
        />
      </circle>
      <circle cx="20" cy="12" r="1.5" fill={fill}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="1.5;3;1.5"
        />
      </circle>
    </svg>
  );
}

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width={size}
//   height={size}
//   fill={fill}
//   classname={`bi bi-exclamation-circle ${className}`}
//   viewBox="0 0 16 16"
