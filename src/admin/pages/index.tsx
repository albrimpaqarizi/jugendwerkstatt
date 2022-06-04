import loadable from "@loadable/component";
import { timeout } from "promise-timeout";
import { PAGE_LOAD_TIMEOUT } from "../config/global";

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages
export const AdminEventsPage = loadable(
  () => timeout(import("./AdminEventsPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
