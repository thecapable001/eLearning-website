import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Javascript() {
  return <CoursePage course={coursePageData.javascript} />;
}
