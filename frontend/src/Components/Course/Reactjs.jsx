import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Reactjs() {
  return <CoursePage course={coursePageData.react} />;
}
