import { projects } from './projects-data.js';

document.addEventListener("DOMContentLoaded", () => renderProjects(projects));

function renderProjects(projectsData) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = projectsData.map(projectRowHTML).join("");
}

function toParagraphs(text, className = "") {
  const cls = className ? ` class="${className}"` : "";
  const items = Array.isArray(text) ? text : [text];
  return items.map((p) => `<p${cls}>${p}</p>`).join("");
}

function projectRowHTML(project) {
  const { title, description, sections, techStack, githubLink, liveLink, type, image } = project;

  const typeLabel = type === 'team' ? 'Team Project' : 'Solo Project';
  const descHTML = toParagraphs(description, "project-desc");

  const sectionsHTML = Array.isArray(sections)
    ? sections.map((s) =>
        `<div class="project-section">
          <h4 class="project-section-title">${s.label}</h4>
          ${toParagraphs(s.text)}
        </div>`
      ).join("")
    : "";

  const techList = Array.isArray(techStack)
    ? techStack.map((tech) => `<span>${tech}</span>`).join("")
    : "";

  return `
    <article class="project-row">
      <div class="project-image-wrapper">
        <img src="${image}" alt="${title} Screenshot" class="project-img" loading="lazy">
      </div>

      <div class="project-content">
        <span class="project-badge">${typeLabel}</span>
        <h3 class="project-title">${title}</h3>
        ${descHTML}
        ${sectionsHTML}

        <h4 class="project-section-title">Built with</h4>
        <div class="project-tech">
          ${techList}
        </div>

        <div class="project-actions">
          ${githubLink ? `<a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="action-btn outline">View Code</a>` : ""}
          ${liveLink ? `<a href="${liveLink}" target="_blank" rel="noopener noreferrer" class="action-btn filled">Live Demo</a>` : ""}
        </div>
      </div>
    </article>
  `;
}
