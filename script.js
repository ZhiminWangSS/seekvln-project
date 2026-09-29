"use strict";

const researchProjects = window.seekVLNRelatedProjects;
const researchProjectLinks = document.getElementById("research-project-links");
if (researchProjectLinks && Array.isArray(researchProjects) && researchProjects.length) {
  const entries = researchProjects.map(project => {
    let publicUrl;
    try {
      const candidate = new URL(project.url);
      if (["https:", "http:"].includes(candidate.protocol)) publicUrl = candidate.href;
    } catch { /* Keep projects without a valid public URL as placeholders. */ }
    const entry = document.createElement(publicUrl ? "a" : "span");
    entry.className = `research-project${publicUrl ? "" : " pending"}`;
    if (publicUrl) { entry.href = publicUrl; entry.target = "_blank"; entry.rel = "noopener"; }
    const title = document.createElement("span"); title.textContent = project.title;
    const status = document.createElement("small"); status.textContent = publicUrl ? "↗" : project.status || "Coming soon";
    entry.append(title, status);
    return entry;
  });
  researchProjectLinks.replaceChildren(...entries);
}

document.getElementById("copy-bibtex").addEventListener("click", async () => {
  const citation = document.getElementById("bibtex-code");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    status.textContent = "BibTeX copied to clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation); selection.removeAllRanges(); selection.addRange(range);
    status.textContent = "Citation selected. Use your device’s Copy command or download the .bib file.";
  }
});

const rolloutSteps = [
  { robot: "robot-approach", view: "view-front", robotAlt: "A Unitree Go2 approaches the end of the hallway.", viewAlt: "The forward observation shows the end wall; the destination chair is not visible.", label: "Current observation / front", tag: "Destination out of view", caption: "The robot follows the hallway. Its forward observation does not reveal the destination chair, leaving the next direction unresolved." },
  { robot: "robot-seek", view: "view-left", robotAlt: "A Unitree Go2 robot turns at the end of a hallway to seek evidence.", viewAlt: "The robot's left view reveals the destination chair.", label: "Acquired evidence / left view", tag: "Chair located", caption: "At the hallway’s end, the chair is outside the forward view. Looking left reveals the evidence needed for the next turn." },
  { robot: "robot-arrive", view: "view-goal", robotAlt: "The robot follows the side hallway toward the chair.", viewAlt: "The chair is directly ahead at the destination.", label: "Grounded destination / chair", tag: "Goal reached", caption: "With the chair located, SeekVLN grounds the destination, turns left, and completes the task. These are selected frames from the paper’s qualitative rollout." }
];

document.querySelectorAll("[data-step]").forEach(button => {
  button.addEventListener("click", () => {
    const step = rolloutSteps[Number(button.dataset.step)];
    document.querySelectorAll("[data-step]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    const robot = document.getElementById("robot-image");
    const view = document.getElementById("evidence-image");
    robot.src = `assets/${step.robot}.webp`; robot.alt = step.robotAlt;
    view.src = `assets/${step.view}.webp`; view.alt = step.viewAlt;
    document.getElementById("view-label").textContent = step.label;
    document.getElementById("evidence-tag").replaceChildren(Object.assign(document.createElement("span"), {className: "status-dot"}), document.createTextNode(step.tag));
    document.getElementById("rollout-caption").textContent = step.caption;
  });
});
