const tr = (en, fr) => {
  if (!localStorage.getItem("lang")) localStorage.setItem("lang", navigator.language.toLowerCase().includes("en") ? "en" : "fr");
  return localStorage.getItem("lang") == "en" ? en : fr;
}

export default tr;