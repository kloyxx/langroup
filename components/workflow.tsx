import { steps } from "@/lib/content";

export function Workflow() {
  return (
    <section className="section workflow" id="workflow" tabIndex={-1} aria-labelledby="workflow-heading">
      <div className="container">
        <h2 id="workflow-heading">Как мы работаем?</h2>
        <ol className="workflow-steps">
          {steps.map(({ title, icon: Icon }, index) => (
            <li className="workflow-step" key={title}>
              <div className="step-icon">
                <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                <span aria-hidden="true">{index + 1}</span>
              </div>
              <h3>{title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
