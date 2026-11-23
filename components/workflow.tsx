import { steps, type Copy } from "@/lib/content";

export function Workflow({ text }: { text: Copy["workflow"] }) {
  return (
    <section className="section workflow" id="workflow" tabIndex={-1} aria-labelledby="workflow-heading">
      <div className="container">
        <h2 id="workflow-heading">{text.heading}</h2>
        <ol className="workflow-steps">
          {steps.map(({ id, icon: Icon }, index) => (
            <li className="workflow-step" key={id}>
              <div className="step-icon">
                <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                <span aria-hidden="true">{index + 1}</span>
              </div>
              <h3>{text.steps[id]}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
