function calculate() {
  const data = [
    { s: 'kScore', t: 'kTotal', w: 'kWeight', r: 'kResult' },
    { s: 'tScore', t: 'tTotal', w: 'tWeight', r: 'tResult' },
    { s: 'aScore', t: 'aTotal', w: 'aWeight', r: 'aResult' },
    { s: 'cScore', t: 'cTotal', w: 'cWeight', r: 'cResult' },
  ];

  let totalPercent = 0;

  data.forEach(item => {
    const score = parseFloat(document.getElementById(item.s).value) || 0;
    const total = parseFloat(document.getElementById(item.t).value) || 1;
    const weight = parseFloat(document.getElementById(item.w).value) || 0;
    const Term Mark = parseFloat(document.getElementById(item.T).value) || 1;

    const percent = (score / total) * weight;
    document.getElementById(item.r).innerText = percent.toFixed(2) + "%";
    totalPercent += percent;
  });
  totalPercent = totalPercent/Term Mark
  document.getElementById("result-box").innerText = "Your Result: " + totalPercent.toFixed(1) + "%";
}
