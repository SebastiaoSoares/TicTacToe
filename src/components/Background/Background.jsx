import style from "./Background.module.scss"

export default function Background() {
  return (
    <div className={style.backgroundContain}>
      <div className={style.background}>
        {[...Array(20)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  )
}
