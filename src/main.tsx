
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure we're targeting the correct element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

try {
  console.log("Initializing application"); // Debug log
  createRoot(rootElement).render(<App />);
  console.log("Application rendered successfully"); // Debug log
} catch (error) {
  console.error("Failed to render application:", error);
  // Display fallback error UI
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h2>Something went wrong</h2>
      <p>The application failed to load. Please check the console for more information.</p>
    </div>
  `;
}
