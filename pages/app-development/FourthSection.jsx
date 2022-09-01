import React from "react";

export default function FourthSection() {
  return (
    <div className={"container"}>
      <div className={"pt-48 pb-24"}>
        <h2 className={"capitalize text-32-44-700 text-center mb-4"}>
          Collaboration strategy for{" "}
          <span className={"text-blue-550"}>Mobile Development</span>
        </h2>
        <p
          className={
            "lg:px-44 px-4 text-16-24-400 text-gray-450 text-center mb-12"
          }
        >
          Let your business lead the way in a highly competitive market in the
          US. Build a robust app solution with the latest technologies to
          incorporate the latest features in your app.
        </p>
        <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>01</p>
            <p className={"text-20-24-700 uppercase mb-6"}>A Discovery Call</p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
              There&apos;s a lot that we do before actually starting the
              project. We do market research and analysis, understand the
              competitive landscape, understand and document clients design and
              branding preferences, consult with all the key stakeholders to
              discuss and discover what you would like to accomplish through
              mobile application development.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="colored-card shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>02</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
              Planning and Researching
            </p>
            <p className={"text-16-24-400 text-450 pr-12 pb-3"}>
              From the initial discovery call, we try to collect as much as
              possible details on where you would like to stand to the end of
              our initial phase collaboration. The collected details will be
              used by our experts to research and propose an adequate plan and
              scope of work for your project. Researching and documenting
              industry leading practice and approaching your problem in-depth
              will lead to an proposal delivery that you will either accept or
              reject.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>03</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
              Proof-of-concept by prototype
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
              Before purchasing a car, you would generally want to test drive it
              to have some level of confidence in the design and functionality.
              Unlike other companies that don&apos;t let you see your product
              until the end of the project, we do an analogy to test-driving a
              car, and come up with a functional prototype before even starting
              the development. Our professional UI/UX developer will take about
              2 weeks to come up with a{" "}
              <a href="https://www.figma.com" target="#">
                Figma
              </a>{" "}
              project for you to have a first look.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>04</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
              Development & Testing
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
              Once you go through our proof-of-concept, our assigned team of
              developers will start their work and keep you updated at least
              twice a week on the progress of your project. Depending on the
              scale and size of the project, we involve people at least 5
              people: Project Manager, Software Architect, UI/UX Designer, QA
              Tester, and a Developer, and with their hard work it generally
              takes about 2-4 months to complete the project.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>Further</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
              Training & Integration / Marketing Help
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
              Once we make sure that your project is complete and the software
              is fully functional and all the features are just as you desired
              when you started collaborating with us, we will start the training
              and system integration process if you are a business owner to
              ensure a smooth transition to your new ecosystem. If you are a
              start-up founder, integration and training will not be a necessity
              for you and we help with your applications&apos;s monetization and
              marketing strategies with the help of our partners such as HubSpot, ZoomInfo etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
