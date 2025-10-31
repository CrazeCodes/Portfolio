import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

import { MagicButton } from "@/components/ui/magic-button";

const RESUME_URL =
  "https://drive.google.com/file/d/1BpIUgEjUIFG_BVV3R0GXaAc8d4vTKKIg/view?usp=sharing";

export const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <h1 className="heading">
        Download <span className="text-purple">Resume</span>
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-white-200">
        Get a copy of my latest resume with experience, projects, and skills.
      </p>

      <div className="mt-10 flex items-center justify-center">
        <Link href={RESUME_URL} target="_blank" rel="noreferrer noopener">
          <MagicButton
            title="Download Resume"
            icon={<FaDownload />}
            position="right"
            asChild
          />
        </Link>
      </div>
    </section>
  );
};

export default Resume;


