interface Props {
  id: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

export default function SvgIcon({ id, width = 24, height = 24, className = '', style }: Props) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      className={`icon ${className}`}
      style={style}
    >
      <use href={`/assets/images/icons.svg#${id}`} />
    </svg>
  )
}
