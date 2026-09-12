"use client";

type IconType =
  | "grayStar"
  | "rightArrow"
  | "tickMark"
  | "yellowMenu"
  | "github"
  | "linkedin"
  | "email"
  | "phone"
  | "android"
  | "chevronDown"
  | "globe";

interface SvgIconProps {
  type: IconType;
  className?: string;
  normalColor?: string;
}

export default function SvgIcon({
  type,
  className = "w-4 h-4",
  normalColor = "currentColor",
}: SvgIconProps) {
  const icons: Record<IconType, React.ReactNode> = {
    grayStar: (
      <svg viewBox="0 0 18 18" fill="none" className={className}>
        <path
          d="M9 0L11.12 6.88L18 9L11.12 11.12L9 18L6.88 11.12L0 9L6.88 6.88L9 0Z"
          fill={normalColor}
        />
      </svg>
    ),
    rightArrow: (
      <svg viewBox="0 0 14 14" fill="none" className={className}>
        <path
          d="M1 7H13M13 7L7 1M13 7L7 13"
          stroke={normalColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tickMark: (
      <svg viewBox="0 0 10 8" fill="none" className={className}>
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke={normalColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    yellowMenu: (
      <svg viewBox="0 0 12 14" fill="none" className={className}>
        <rect width="12" height="2" rx="1" fill={normalColor} />
        <rect y="6" width="8" height="2" rx="1" fill={normalColor} />
        <rect y="12" width="12" height="2" rx="1" fill={normalColor} />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill={normalColor}
        />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          fill={normalColor}
        />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
          stroke={normalColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M5 4H9L11 9L8.5 10.5C9.571 12.671 11.329 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
          stroke={normalColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    android: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M18 8H6V16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V8Z"
          stroke={normalColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 3L17 6H7L9 3" stroke={normalColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="5.5" r="0.5" fill={normalColor} />
        <circle cx="14" cy="5.5" r="0.5" fill={normalColor} />
        <path d="M5 10V14" stroke={normalColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 10V14" stroke={normalColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 18V21" stroke={normalColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 18V21" stroke={normalColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    chevronDown: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M6 9L12 15L18 9"
          stroke={normalColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" stroke={normalColor} strokeWidth="1.5" />
        <path d="M2 12H22" stroke={normalColor} strokeWidth="1.5" />
        <path
          d="M12 2C14.5 4.73 15.87 8.26 16 12C15.87 15.74 14.5 19.27 12 22C9.5 19.27 8.13 15.74 8 12C8.13 8.26 9.5 4.73 12 2Z"
          stroke={normalColor}
          strokeWidth="1.5"
        />
      </svg>
    ),
  };

  return <>{icons[type]}</>;
}
