interface Props {
  className?: string;
}

export const LogoTitle = ({ className }: Props) => {
  return (
    <div className={`flex items-center justify-center gap-4 mt-4 ${className}`}>
      <img
        src="/assets/logo-v2.svg"
        alt="Logo de la página Clawver Tasks"
        fetchPriority="high"
        className="w-16"
      />
      <h1 className="font-bold text-[#222] text-4xl ">Clawver Tasks</h1>
    </div>
  );
};
