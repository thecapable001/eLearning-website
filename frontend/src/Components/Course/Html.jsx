import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Html() {
  return <CoursePage course={coursePageData.html} />;
}
