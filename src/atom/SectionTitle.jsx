import PropTypes from "prop-types"
import { ArrowRight } from "@mui/icons-material"

function SectionTitle({ children }) {
  return (
    <header className="w-full">
      {children}
    </header>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.element
}

function Title({ title, sizes }) {
  const variant = {
    sizes: {
      medium: "lg:text-xl",
      large: "text-md lg:text-2xl",
      extraLarge: "text-3xl"
    }
  }
  return (
    <div className={`h-8 lg:h-14 w-full ${variant.sizes[sizes]} flex justify-start items-center font-raleway font-bold`}>
      <h2>{title}</h2>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired
}

function SubTitle({ subTitle }) {
  return (
    <div className="w-full h-12 flex justify-start items-center lg:text-end text-owner-primary font-semibold text-xs lg:text-base">
      <ArrowRight />
      <h3 className="text-black">{subTitle}</h3>
    </div>
  )
}

SubTitle.propTypes = {
  subTitle: PropTypes.string.isRequired
}

SectionTitle.Title = Title
SectionTitle.SubTitle = SubTitle
export default SectionTitle
