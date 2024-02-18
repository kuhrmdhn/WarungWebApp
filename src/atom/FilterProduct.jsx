import { Box, Tab, Tabs } from "@mui/material"
import { useGetApiStore } from "../../Zustand/Api/ApiStore"
import { useNavigateProduct } from "../../Zustand/Navigate/NavigateStore"

function FilterProduct() {
    const categoryData = useGetApiStore(state => state.categoryData)
    const [navigate, setNavigate] = useNavigateProduct(state => [state.navigate, state.setNavigate])
    const tabData = [{ id: 4, name: "Semua" }, ...categoryData,]
    function setCategoryByNavigate(target) {
        setNavigate(target)
    }
    return (
        <Box sx={{width: "100%"}}>
            <Tabs sx={{ width: "100%"}} variant="scrollable" indicatorColor="primary" value={navigate} aria-label="category product">
                {
                    tabData.map((data) => (
                        <Tab value={data.name} label={data.name} onClick={() => setCategoryByNavigate(data.name)} key={data.id} />
                    ))
                }
            </Tabs>
        </Box>
    )
}

export default FilterProduct
