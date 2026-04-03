import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Css() {
  return <CoursePage course={coursePageData.css} />;
}
