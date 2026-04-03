import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Express() {
  return <CoursePage course={coursePageData.express} />;
}
