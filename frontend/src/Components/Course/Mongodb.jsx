import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Mongodb() {
  return <CoursePage course={coursePageData.mongodb} />;
}
