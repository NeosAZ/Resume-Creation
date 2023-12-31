import React from "react";
import { useState } from "react";
import SectionTemplate from "../component/features/homepageComponentOld/sectionTemplate";
import submitButton from "../component/features/homepageComponentOld/submitButton";

export default function ResumeForm() {
  const [resume, setResume] = useState({});

  const updateResume = (currentObject, sectionName) => {
    setResume((prevResume) => ({
      ...prevResume,
      [sectionName]: currentObject,
    }));
    console.log(JSON.stringify(resume));
  };

  const general = [
    { category: "name", type: "text" },
    { category: "Phone Number", type: "text" },
    { category: "Email", type: "email" },
    { category: "Linkedin", type: "text " },
  ];

  const general_template = SectionTemplate(
    "General Information",
    general,
    updateResume
  );

  const education = [
    { category: "School", type: "text" },
    { category: "Location", type: "text" },
    { category: "Major", type: "text" },
    { category: "Minor (if applicable)", type: "text" },
  ];

  const education_template = SectionTemplate(
    "Education",
    education,
    updateResume,
    true
  );

  const experience = [
    { category: "Job Title", type: "text" },
    { category: "Company", type: "text" },
    { category: "Job Description", type: "text" },
    { category: "Start Date", type: "date" },
    { category: "End Date", type: "date" },
  ];
  const experience_template = SectionTemplate(
    "Experience",
    experience,
    updateResume,
    true
  );

  const button = submitButton(resume);

  return (
    <div className="resumeForm">
      {general_template}
      {education_template}
      {experience_template}
      {button}
    </div>
  );
}
