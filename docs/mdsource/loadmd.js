function loadmd(filename) {
  fetch(`mdsource/${filename}.md`)
  .then(response => response.text())
  .then(data => {
    document.querySelector(`#${filename}`).innerHTML = data;
    hljs.highlightBlock(document.querySelector(`#${filename}`));
  });
}