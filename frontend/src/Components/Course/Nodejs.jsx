import React from "react";
import CoursePage from "./CoursePage";
import { coursePageData } from "./coursePageData";

export default function Nodejs() {
  return <CoursePage course={coursePageData.nodejs} />;
}
