import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Joseph
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full-stack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Personable and passionate full-stack developer with a background in
        health insurance and customer service and a Full Stack Certificate from
        the University of Central Florida. Proficient in Node.js, React,
        Express, MongoDB, Postgres, JavaScript, CSS, HTML, and creating
        responsive applications. Collaborative and skilled in high-stress
        problem-solving. Enjoys connecting with co-workers and building
        applications to improve everyday life. Seeking to leverage attention to
        detail and technical skills to become a valuable asset to a company.
        <br />
        You can view all of my coding projects and group projects in my gitHub:{" "}
        <a
          href="https://github.com/joegruff16"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="nonreferrer noopener"
        >
          JosephRuff
        </a>
      </p>
    </div>
  );
}

export default Intro;
