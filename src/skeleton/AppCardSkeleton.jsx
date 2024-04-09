import { Skeleton } from "@mui/material";

function AppCardSkeleton() {
    return (
        <section className="w-full h-fit py-5 flex flex-wrap flex-col justify-center items-center sm:items-end sm:flex-row sm:gap-16">
            <Skeleton height={560} sx={{ minWidth: "224px", maxWidth: "240px", margin: "0" }} />
            <Skeleton height={560} sx={{ minWidth: "224px", maxWidth: "240px", margin: "0" }} />
            <Skeleton height={560} sx={{ minWidth: "224px", maxWidth: "240px", margin: "0" }} />
        </section>
    )
}

export default AppCardSkeleton
