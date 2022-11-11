import { Explore } from "../pages/Explore"
import Home from "../pages/home/Home"
import DetailPage from "../pages/detailPage/DetailPage"
const routes = [
  {
    path: "explore",
    element: Explore
  },
  {
    path: "/",
    element: Home
  },
  {
    path: "DetailPage",
    element: DetailPage
  }
]

export default routes
