import {create} from "zustand"

type PageStore = {
    PageTitle: string
    setPageTitle: (param: string) => void
}

export const PageStore = create<PageStore>((set) => ({
    PageTitle: "Warung Web",
    setPageTitle: (title: string) => {
        document.title = title
    }
}))