interface ArrowProps {
  isOpen: boolean;
  className?: string;
  size?: {
    width: number;
    height: number;
  };
  strokeWidth?: number;
  color?: string;
}

export const Arrow = ({
  isOpen,
  className = '',
  size = { width: 24, height: 13 },
  strokeWidth = 2.5,
  color = '#070707',
}: ArrowProps) => {
  const { width, height } = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 0.3s ease',
      }}
      className={className}
    >
      <path
        d={`M2 1.36401L${width / 2} ${height - 1.636}L${width - 2} 1.36401`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
