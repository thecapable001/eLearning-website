import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Javaprog() {
  return <CoursePage course={coursePageData.java} />;
}
