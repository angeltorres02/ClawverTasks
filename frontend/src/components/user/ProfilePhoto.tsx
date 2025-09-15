interface Props {
  size?: number;
  className?: string;
}

export const ProfilePhoto = ({ size = 48, className }: Props) => {
  return (
    <div className={`${className}`}>
      <img
        src="/assets/profile-photos/dum.jpg"
        alt="Foto de perfil"
        className="w-full h-full object-cover rounded-full"
        fetchPriority="high"
        width={size}
        height={size}
      />
    </div>
  );
};
