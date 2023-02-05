import modules from "../modules"
import {createBrowserRouter} from "react-router-dom";

export default createBrowserRouter(Object.values(modules).map((module) =>  module.router))

