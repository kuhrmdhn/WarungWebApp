import { Launch } from "@mui/icons-material"
import { Button } from "@mui/material"
import PropTypes from "prop-types"

function AppCard({ link, img, alt }) {
    function movePage() {
        window.open(link, "_blank")
    }
    return (
        <section className="w-56 sm:w-60 relative font-raleway hover:scale-105 duration-500 cursor-pointer">
            <img className="h-1/2 w-full" src={img} alt={alt} />
            <div className="h-1/6 w-full mt-3 absolute bottom-0 backdrop-blur-sm text-white flex justify-around items-center text-lg">
                <h1>{alt}</h1>
                <Button onClick={movePage} variant="contained" color="primary"><Launch sx={{ fontSize: "18px" }} /></Button>
            </div>
        </section >
    )
}

export default AppCard

AppCard.propTypes = {
    link: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string
}