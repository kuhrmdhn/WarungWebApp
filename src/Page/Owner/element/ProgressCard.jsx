import { LinearProgress } from "@mui/material"

function ProgressCard({ name, value, max }) {
    const progress = (value / max * 100)
    const soldPercentage = `${parseFloat(progress).toFixed(2)} %`

    return (
        <section className="w-full h-14 flex justify-around items-center px-3">
            <div className="w-1/3 h-full flex items-center justify-end text-right text-xs">
                <h3>{name}</h3>
            </div>
            <div className="w-3/5 h-full flex flex-col justify-center border-l-2 border-black">
                <LinearProgress sx={{height: "20px"}} color="secondary" variant="determinate" value={progress} />
            </div>
        </section>
    )
}

export default ProgressCard
