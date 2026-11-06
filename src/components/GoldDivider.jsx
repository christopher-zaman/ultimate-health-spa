
export default function GoldDivider() {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-6 pt-8"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="h-8 w-full"
      >
        <path
          d="M0 16 Q300 27 600 16 T1200 16"
          fill="none"
          stroke="#C8A45E"
          strokeWidth="1"
          opacity=".55"
        />

        <path
          d="M0 20 Q300 31 600 20 T1200 20"
          fill="none"
          stroke="#C8A45E"
          strokeWidth=".5"
          opacity=".25"
        />

        <path
          d="M600 7 L603 14 L610 16 L603 18 L600 25 L597 18 L590 16 L597 14 Z"
          fill="#C8A45E"
        />
      </svg>
    </div>
  );
}
