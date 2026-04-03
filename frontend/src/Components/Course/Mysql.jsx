import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Mysql() {
  return <CoursePage course={coursePageData.mysql} />;
}
