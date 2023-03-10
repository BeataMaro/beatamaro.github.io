function createHtmlFromTemplate(temp) {
  const template = document.createElement('template');
  template.innerHTML = temp.trim();

  return template.content.firstElementChild;
}

export default createHtmlFromTemplate;
