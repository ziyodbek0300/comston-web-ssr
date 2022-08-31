import React from "react";
import Image from "next/image";
import Img1 from "../../../public/blog/img8.png";
import Img2 from "../../../public/blog/img7.png";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function Details() {
  return (
    <>
      <Navbar />
      <div className={"container-md"}>
        <div className="sections-wrapper">
          <div className={"pt-10"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>25 June, 2022</p>
            <p className={"text-30-44-600"}>
              Software Development Lifecycle Deep Dive
            </p>
          </div>

          <div className={"md:py-10 py-6 text-18-28-400 text-gray-450"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>
              Ideas and Discovery
            </p>
            <p className={"md:pb-10 pb-5"}>
              “I have an idea” is usually how a concept starts. Ideas are what
              typically kicks off the scientific method, but not all ideas make
              it to production as most are just conversation points or are
              half-baked and require a deeper dive. This is where the discovery
              process helps application developers determine requirements and
              scope to deliver a solution based on the initial idea.
              <br /> <br />
              Application developers work from scope and requirements. The
              discovery process allows a client to walk representatives for the
              development team through their idea or concept. This is where a
              multitude of questions are asked. Clients don’t often understand
              the complexities of development and programming, so this is the
              opportunity to ensure that a client’s idea is achievable. The
              scope for the project usually comes from basic discovery, and
              rough requirements are worked through to provide the additional
              details of what to build, expect, and ensure.
              <br />
              <br />
              The outcome of the discovery process should be a clear scope of
              what is needed. The client had the opportunity to walk the
              application development partner through their idea and concept and
              discuss how the potential solution should work. The biggest issue
              found in the discovery process is hesitance to share and unknowns
              for the client and the developer. Luckily, the research and
              proposal phase of the project helps identify these unknowns and
              works through the project requirements.
              <br /> <br />
              What ideas do you have that could be scoped for application
              development?
            </p>
          </div>
          {/* <div className={"details-img"}>
            <Image src={Img1} className={"w-full"} alt={"scientist"} />
          </div> */}
          <div className={"md:py-10 py-6 text-18-28-400 text-gray-450"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>
              Research and Proposal
            </p>
            <p className={"md:pb-10 pb-5"}>
              The research and proposal phase allows the development team to
              properly assess the level of effort, determine the solution
              framework needed, collect the project requirements, and match
              their findings to a dollar amount for the client. Getting this
              step right in the development process is crucial in delivering a
              solution that meets the needs and budget of the client.
              <br />
              <br />
              The level of effort in an application development project will set
              the timeline and align the right development resources. Client
              environmental factors will be outlined, and a rough sketch for the
              expected solution should be able to be drafted. These factors can
              be used to provide details for a requirements document. The
              requirements document gives a level of protection for the client
              and the developer since it provides a baseline for expectations.
              <br />
              <br />
              Additional research can be performed regarding the previous
              solution or lack of solution. Why is the client needing this
              application now? What is to be gained with a successful solution?
              How will the users interact with the solution? The proposal should
              provide the client with an understanding of the need for the
              application and the solution it should provide. The proposal will
              also give the client the cost for the solution and the payment
              method – firm fixed price or time and materials. Milestones for
              review should be established within the proposal to outline
              expectations for review, testing, and deployment. A solid proposal
              will help ensure success for the project and build client intimacy
              through expectation setting and return on investment.
              <br />
              <br />
              How does your organization handle proposal review?
            </p>
          </div>
          {/* <div className={"details-img"}>
            <Image src={Img2} className={"w-full"} alt={"microscop"} />
          </div> */}
          <div className={"md:py-10 py-6 text-18-28-400 text-gray-450"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>
              Proof by Prototype
            </p>
            <p className={"md:pb-10 pb-5"}>
              Before you buy a car, you typically take it on a test drive. You
              kick the tires, talk about fuel economy, and make sure the
              automobile meets your needs. The same should be true for
              application development. A prototype provides a clear indication
              of the user interface and experience through a concept
              walkthrough. A prototype of the future solution provides the
              client confidence that the developer understands the idea and can
              develop towards a solution that meets their scope and
              requirements. Seeing is believing, and a prototype gives the
              client a visual representation of what’s to come.
              <br />
              <br />
              A prototype in PowerPoint is just a guess and provides no way to
              experience the proposed solution. A prototype should be build in a
              staging environment with dummy data to allow the client to see and
              feel the interface. A huge win in prototyping is being able to pop
              the hood and show the client the back-end engine that affects the
              front-end of the application.
              <br />
              <br />
              Many application developers like to skip the prototype phase as it
              decreases their profit margin and takes time away from production
              development. However, a smart developer knows that the framework
              built for the prototype should be leveraged for the production
              deployment. Clients will gain confidence in the solution if they
              can take it for a test drive.
              <br />
              <br />
              When was the last time you saw a prototype that was perfect to
              move to development?
            </p>
          </div>

          <div className={"md:py-10 py-6 text-18-28-400 text-gray-450"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>
              Development and Testing
            </p>
            <p className={"md:pb-10 pb-5"}>
              When it’s time to build, the development process takes over, but
              there are many dependencies in the development process to make it
              on time, on scope, and at budget. A development kickoff meeting
              should be held to level set expectations and assign oversight and
              review duties. Many clients and application developers like to say
              they are “Agile” in their methodologies, but they are mostly
              reactive and take things one day at a time. This approach leads to
              scope creep and partial product releases.
              <br />
              <br />
              The design of the solution is provided by a solution architect who
              understands the environment, requirements, the client, and the
              development cycle. Development is lead by lead developers who plan
              for upcoming unit, regression, and user acceptance testing. A
              great development experience will plan for two steps ahead and
              proactively handle each step.
              <br />
              <br />
              True Agile development works in “sprints” with weekly project
              updates, scrum planning, and sprint retrospectives. All great
              developers know to refactor as they develop to save time and cost
              in end product rework. The proposal will outline any phased
              approach to deployment and detail scope that is in play or planned
              for the future.
              <br />
              <br />
              Best practices indicate that code should be documented and support
              and maintenance should be planned for through exception handling
              methods driven by proper coding. Thorough test planning and
              testing MUST be performed to prevent unknowns and reactive fixes.
              Internal and client facing testing must be managed appropriately,
              and a quality assurance check helps stakeholders ensure that all
              requirements are met and no harm will come. At this point, the
              solution should be ready for deployment.
              <br />
              <br />
              What other controls have you seen application developers put in
              place to get it right the first time?
            </p>
          </div>

          <div className={"md:py-10 py-6 text-18-28-400 text-gray-450"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>
              Maintenance and Enhancements
            </p>
            <p className={"md:pb-10 pb-5"}>
              Nostradamus and Edgar Cayce both accurately predicted that all
              development must be maintained and supported. They also noted that
              many projects can be improved through a phased approach with
              ongoing enhancements as a business grows.
              <br />
              <br />
              Many proposals include a 12% to 18% total contract value cost for
              ongoing maintenance and support. This is because we cannot predict
              the future. Organization’s processes change and tool usage may
              point to feature set enhancements might be needed that weren’t
              foreseen when the initial development started. Industry changes
              may also make some features of a developed product obsolete. At
              the same time, integrations to new applications may be required.
              <br />
              <br />
              Application maintenance should be facilitated through direct
              communication with the client through a ticketing system or
              documented contact. Issues that arise with the coding need to be
              handled quickly, efficiently, and thoroughly. Feature set
              enhancements can be planned out using the previously outline
              software development lifecycle. The goal for application
              maintenance and enhancements should be to fix an issue or expand
              the capabilities of the application.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
