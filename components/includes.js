// components/includes.js

async function loadHTML(elementId, filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.status}`);
    }

    const html = await response.text();

    const element = document.getElementById(elementId);

    if (element) {
      element.innerHTML = html;
    } else {
      console.error(`Element with ID "${elementId}" not found`);
    }

  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "../components/header.html");
  loadHTML("footer", "../components/footer.html")
});