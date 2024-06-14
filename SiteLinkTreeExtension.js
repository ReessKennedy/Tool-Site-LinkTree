// Define your links
const links = [
  { name: "Repos-Personal", url: "https://github.com/MyName?tab=repositories" },
  { name: "Repos-Team", url: "https://github.com/orgs/myorg/repositories?q=visibility%3Aprivate+archived%3Afalse" },
  { name: "Trending Repo", url: "https://github.com/trending" }
];

// Define style variables
const styleConfig = {
  position: {
    top: "20px",   // Set to '' if not used
    right: "", // Set to '' if not used
    bottom: "",    // Set to '' if not used
    left: "20px"       // Set to '' if not used
  },
  button: {
    backgroundColor: "#e0e0e0",
    textColor: "#000000",
    borderColor: "#cccccc",
    textDecoration: "none",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)"
  }
};

// Create the link container
const linkContainer = document.createElement("div");
linkContainer.style.position = "fixed";
linkContainer.style.top = styleConfig.position.top || "auto";
linkContainer.style.right = styleConfig.position.right || "auto";
linkContainer.style.bottom = styleConfig.position.bottom || "auto";
linkContainer.style.left = styleConfig.position.left || "auto";
linkContainer.style.zIndex = 1000;
linkContainer.style.padding = "10px";
linkContainer.style.backgroundColor = "#fff";
linkContainer.style.borderRadius = "5px";
linkContainer.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

// Create and style each link button
links.forEach(link => {
  const button = document.createElement("a");
  button.href = link.url;
  button.textContent = link.name;
  button.style.display = "block";
  button.style.marginBottom = "10px";
  button.style.padding = "3px 10px";
  button.style.backgroundColor = styleConfig.button.backgroundColor;
  button.style.color = styleConfig.button.textColor;
  button.style.border = `1px solid ${styleConfig.button.borderColor}`;
  button.style.textDecoration = styleConfig.button.textDecoration;
  button.style.boxShadow = styleConfig.button.boxShadow;
  button.style.borderRadius = "3px";
  button.style.textAlign = "center";
  button.target = "_blank"; // Open links in new tab
  linkContainer.appendChild(button);
});

// Append the link container to the body
document.body.appendChild(linkContainer);
