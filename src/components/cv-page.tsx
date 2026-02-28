import { Link } from "@tanstack/react-router";
import { PiArrowLeftFill } from "react-icons/pi";
import { cvData } from "~/data/cv";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import type { Education, Experience, SideProject } from "~/data/cv";

const printCSS = `
@media print {
  @page {
    size: A4;
    margin: 1.5cm;
  }

  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  h2, h3 { break-after: avoid; }

  .cv-page { background: white !important; }
  .cv-page .cv-no-print { display: none; }
  .cv-page main { padding-top: 0; }
  .cv-page .cv-header { margin-bottom: 1rem; padding: 0; }

  .cv-page .cv-card {
    box-shadow: none;
    padding: 0;
    margin-bottom: 2rem;
    break-inside: avoid;
  }

  .cv-page section > .cv-card:last-child { margin-bottom: 0; }

  .cv-page .cv-section-header {
    margin-top: 3rem;
    margin-bottom: 0.75rem;
  }

  .cv-page .cv-highlights li { margin-bottom: 0; }
}
`;

const CARD_CLASS =
  "cv-card bg-card p-7 pb-6 mb-6 relative max-sm:px-4 max-sm:py-5 max-sm:pb-4";

const SLASH_BULLET_CLASS =
  "pl-4 relative before:content-['›'] before:absolute before:left-0 before:font-mono before:text-orange before:font-bold before:text-base";

const CONTACT_LINK_CLASS = "text-text no-underline hover:text-orange";

const ACTION_BTN_CLASS =
  "font-mono text-xs font-bold text-card py-1.5 px-4 bg-text hover:opacity-80 cursor-pointer";

function CvSectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="cv-section-header font-mono font-bold text-[clamp(1.4rem,3.5vw,1.8rem)] text-text uppercase mt-8 mb-5 inline-flex items-center gap-3">
      <span className="font-mono font-bold text-xs text-orange border-2 border-orange px-2 py-0.5 leading-none">
        {number.replace("SEC.", "")}
      </span>
      {title}
    </h2>
  );
}

function TechPills({ tech }: { tech: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 m-0 p-0 list-none">
      {tech.map((t) => (
        <li
          key={t}
          className="font-mono text-[0.7rem] font-medium tracking-wide py-0.5 px-2.5 bg-lime text-text uppercase"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function JobCard({ job }: { job: Experience }) {
  return (
    <div className={CARD_CLASS}>
      <div className="mb-1">
        <h3 className="font-mono font-bold text-xl text-text uppercase m-0 inline">
          {job.company}
        </h3>
        {job.subtitle && (
          <span className="font-sans text-sm text-muted ml-2">
            ({job.subtitle})
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-3">
        <p className="font-mono text-sm text-orange font-medium m-0">
          {job.role}
        </p>
        <span className="font-mono text-xs text-muted">
          {job.location} · {job.period}
        </span>
      </div>

      <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0 mb-4">
        {job.description}
      </p>

      <ul className="cv-highlights space-y-1.5 mb-4 pl-0 list-none">
        {job.highlights.map((h, i) => (
          <li
            key={i}
            className={`font-sans text-sm text-text leading-relaxed ${SLASH_BULLET_CLASS}`}
          >
            {h}
          </li>
        ))}
      </ul>

      <TechPills tech={job.tech} />
    </div>
  );
}

function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <div id={project.id} className={`${CARD_CLASS} scroll-mt-8`}>
      <h3 className="font-mono font-bold text-xl text-text uppercase m-0 mb-0.5">
        {project.name}
      </h3>
      <p className="font-mono text-sm text-orange font-medium m-0 mb-1">
        {project.tagline}
      </p>
      <span className="font-mono text-xs text-muted block mb-3">
        {project.period}
      </span>

      <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0 mb-4">
        {project.description}
      </p>

      <TechPills tech={project.tech} />
    </div>
  );
}

function EducationItem({ edu }: { edu: Education }) {
  return (
    <li
      className={`font-sans text-[0.9rem] text-text leading-relaxed ${SLASH_BULLET_CLASS}`}
    >
      <span className="font-medium">{edu.title}</span>
      {edu.detail && <span className="text-muted"> — {edu.detail}</span>}
      {edu.period && <span className="text-muted ml-1">({edu.period})</span>}
    </li>
  );
}

export function CvPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />
      <div className="cv-page neo-grid-bg bg-bg min-h-screen">
        <nav className="cv-no-print max-w-[860px] mx-auto px-6 pt-8 flex items-center justify-between max-sm:px-4">
          <Link
            to="/"
            className="font-mono text-xs font-bold text-text no-underline py-1.5 px-3 bg-lime hover:bg-text hover:text-lime inline-block"
          >
            <PiArrowLeftFill className="inline mr-1" /> dulev.dev
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => window.print()}
                className={ACTION_BTN_CLASS}
              >
                Save as PDF
              </button>
            </TooltipTrigger>
            <TooltipContent>
              Select "Save as PDF" in print destination
            </TooltipContent>
          </Tooltip>
        </nav>

        <main className="max-w-[860px] mx-auto px-6 pt-8 pb-20 max-sm:px-4">
          <header className="cv-header mb-8 bg-card p-7 pb-6 max-sm:px-4 max-sm:py-5 max-sm:pb-4">
            <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text m-0 mb-2 leading-tight">
              {cvData.name}
            </h1>
            <p className="font-mono text-lg text-orange font-medium m-0 mb-5">
              {cvData.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
              <a
                href={`mailto:${cvData.contact.email}`}
                className={CONTACT_LINK_CLASS}
              >
                {cvData.contact.email}
              </a>
              <span className="text-muted-light max-sm:hidden">|</span>
              <a
                href={`tel:${cvData.contact.phone.replace(/-/g, "")}`}
                className={CONTACT_LINK_CLASS}
              >
                {cvData.contact.phone}
              </a>
              <span className="text-muted-light max-sm:hidden">|</span>
              <a
                href={cvData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={CONTACT_LINK_CLASS}
              >
                github.com/dulev
              </a>
              <span className="text-muted-light max-sm:hidden">|</span>
              <a
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={CONTACT_LINK_CLASS}
              >
                dulev.dev/linkedin
              </a>
            </div>
          </header>

          <section>
            <CvSectionHeader number="SEC.01" title="Summary" />
            <div className="cv-card bg-card p-7 pb-6 mb-6 max-sm:px-4 max-sm:py-5 max-sm:pb-4">
              <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0">
                {cvData.summary}
              </p>
            </div>
          </section>

          <section>
            <CvSectionHeader number="SEC.02" title="Experience" />
            {cvData.experience.map((job) => (
              <JobCard key={job.company} job={job} />
            ))}
          </section>

          <section>
            <CvSectionHeader number="SEC.03" title="Side Projects" />
            {cvData.sideProjects.map((project) => (
              <SideProjectCard key={project.id} project={project} />
            ))}
          </section>

          <section>
            <CvSectionHeader number="SEC.04" title="Education" />
            <div className="cv-card bg-card p-6 mb-6 max-sm:p-4">
              <ul className="space-y-2 pl-0 list-none m-0">
                {cvData.education.map((edu) => (
                  <EducationItem key={edu.title} edu={edu} />
                ))}
              </ul>
            </div>
          </section>

          <section>
            <CvSectionHeader number="SEC.05" title="Personal" />
            <div className="cv-card bg-card p-7 pb-6 mb-6 max-sm:px-4 max-sm:py-5 max-sm:pb-4">
              <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0">
                {cvData.personal}
              </p>
            </div>
          </section>
        </main>

        <nav className="cv-no-print max-w-[860px] mx-auto px-6 pb-10 flex items-center justify-between max-sm:px-4">
          <Link
            to="/"
            className="font-mono text-xs font-bold text-text no-underline py-1.5 px-3 bg-lime hover:bg-text hover:text-lime inline-block"
          >
            <PiArrowLeftFill className="inline mr-1" /> dulev.dev
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => window.print()}
                className={ACTION_BTN_CLASS}
              >
                Save as PDF
              </button>
            </TooltipTrigger>
            <TooltipContent>
              Select "Save as PDF" in print destination
            </TooltipContent>
          </Tooltip>
        </nav>
      </div>
    </>
  );
}
