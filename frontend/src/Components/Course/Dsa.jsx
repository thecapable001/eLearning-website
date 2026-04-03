import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Dsa() {
  return <CoursePage course={coursePageData.dsa} />;
}
