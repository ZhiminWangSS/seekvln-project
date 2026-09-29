"use strict";

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

const benchmarks = {
  r2r: { name: "R2R-CE", values: [54.8, 61.0, 67.5], spl: [46.9, 55.9, 61.4] },
  rxr: { name: "RxR-CE", values: [52.2, 55.7, 59.7], spl: [40.2, 47.4, 50.3] }
};
document.querySelectorAll("[data-dataset]").forEach(button => {
  button.addEventListener("click", () => {
    const data = benchmarks[button.dataset.dataset];
    document.querySelectorAll("[data-dataset]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    ["base", "sft", "rft"].forEach((key, index) => {
      document.getElementById(`bar-${key}`).style.width = `${data.values[index]}%`;
      document.getElementById(`value-${key}`).textContent = data.values[index].toFixed(1);
    });
    document.querySelector(".bar-chart").setAttribute("aria-label", `${data.name} success rate comparison`);
    document.getElementById("spl-summary").textContent = `Path efficiency (SPL): ${data.spl.map(value => value.toFixed(1)).join(" → ")}.`;
  });
});
