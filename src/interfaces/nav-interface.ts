import PageType from "./page-interface";

interface NavType {
    pages: PageType[]
    selected: PageType
    changePage: (page: PageType) => void
}

export default NavType