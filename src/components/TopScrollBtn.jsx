import { BsArrowUpSquareFill } from "react-icons/bs"

const TopScrollBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className="top-scroll-btn" onClick={scrollToTop}>
      <BsArrowUpSquareFill className="top-scroll-icon" />
    </div>
  )
}
export default TopScrollBtn
