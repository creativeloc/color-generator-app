import { toast } from "react-toastify"

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  // console.log(color)

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("Color Value Copied to Clipboard")
      } catch (error) {
        toast.error("Failed to copy Color Value")
      }
    } else {
      toast.error("Browser Clipboard Access Denied")
    }
  }

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor
