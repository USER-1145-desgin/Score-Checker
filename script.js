function calculate() {
  const data = [
    { s: 'kScore', t: 'kTotal', w: 'kWeight', r: 'kResult' },
    { s: 'tScore', t: 'tTotal', w: 'tWeight', r: 'tResult' },
    { s: 'aScore', t: 'aTotal', w: 'aWeight', r: 'aResult' },
    { s: 'cScore', t: 'cTotal', w: 'cWeight', r: 'cResult' },
  ];

  let totalPercent = 0;
  const totalWeight = Number(document.getElementById("totalWeight").value) || 1;

  data.forEach(item => {
    const score = parseFloat(document.getElementById(item.s).value) || 0;
    const total = parseFloat(document.getElementById(item.t).value) || 1;
    const weight = parseFloat(document.getElementById(item.w).value) || 0;

    // ✅ weight is in %, so divide by 100
    const percent = (score / total) * (weight / 100);
    document.getElementById(item.r).innerText = (percent * 100).toFixed(2) + "%";
    totalPercent += percent
  });
  
  totalPercent = (totalPercent/totalWeight) * 100;
  document.getElementById("result-box").innerText =
    "Your Result: " + totalPercent.toFixed(1) + "%";
}
