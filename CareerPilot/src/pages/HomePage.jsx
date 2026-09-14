import { useRef } from "react";

export default function HomePage() {
  
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("Selected file:", file);
      console.log("File name:", file.name);
      console.log("File type:", file.type);
      console.log("File size:", file.size);
      alert("This feature is not yet implemented.\n\nThank you for uploading your Resume:\n" + file.name)
    }
  };

  return <><h1>Welcome to Career Pilot</h1>
  <p>Take the busywork out of your job search.</p>

  <p>Career Pilot helps you spend less time managing your job hunt and more time finding the right opportunity.</p>

  <p>Start by uploading your resume. Career Pilot will analyze your experience, skills, and qualifications to provide personalized feedback and help you understand how your resume may perform in today's job market.</p>

  <p>Ready to take it further? Career Pilot Pro can search job boards on your behalf, identify opportunities that match your background, and bring relevant openings back to you in one place—so you can review the jobs that matter and decide where to apply.</p>
  <br></br>
  <p>Ready to get started?</p>

  <button
          type="button" 
          className="btn btn-primary"
          onClick={handleUploadClick}
          aria-label="Click to Upload Resume." 
        >
          Upload your resume to begin.
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
  </>
}