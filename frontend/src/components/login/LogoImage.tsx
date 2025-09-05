interface Props {
  size?: number;
  className?: string;
}

export const LogoImage = ({ size = 100, className }: Props) => (
  <img
    src="/assets/logo-v2.svg"
    alt="Logo de la página Clawver Tasks"
    fetchPriority="high"
    width={size}
    height={size}
    className={className}
  />
);
