import { Launch } from "@mui/icons-material"
import { Button } from "@mui/material"

function AppCard({ link, img, alt }) {
    function movePage() {
        window.open(link, "_blank")
    }
    return (
        <section className="w-56 sm:w-60 relative font-raleway">
            <img className="aspect-auto h-5/6" src={img} alt={alt} />
            <div className="h-1/6 w-full mt-3 flex justify-around items-center text-lg">
                <h1>{alt}</h1>
                <Button onClick={movePage} variant="contained" color="primary"><Launch sx={{ fontSize: "18px" }} /></Button>
            </div>
        </section >
    )
}

export default AppCard
