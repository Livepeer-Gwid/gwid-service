import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ReferralIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 20, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 6.5C21 8.43 19.43 10 17.5 10C15.57 10 14 8.43 14 6.5C14 4.57 15.57 3 17.5 3C19.43 3 21 4.57 21 6.5ZM8.5 10C10.43 10 12 8.43 12 6.5C12 4.57 10.43 3 8.5 3C6.57 3 5 4.57 5 6.5C5 8.43 6.57 10 8.5 10ZM8.5 12C6.01 12 1 13.24 1 15.75V19H16V15.75C16 13.24 10.99 12 8.5 12ZM17.5 12C17.09 12 16.65 12.03 16.2 12.08C17.31 12.94 18 14.09 18 15.75V19H23V15.75C23 13.24 18.99 12 17.5 12Z"
        fill={color}
      />
    </svg>
  )
);

ReferralIcon.displayName = "ReferralIcon";
export default ReferralIcon;
