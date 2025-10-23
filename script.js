function calculate() {
  const data = [
    { s: 'kScore', t: 'kTotal', w: 'kWeight', r: 'kResult' },
    { s: 'tScore', t: 'tTotal', w: 'tWeight', r: 'tResult' },
    { s: 'aScore', t: 'aTotal', w: 'aWeight', r: 'aResult' },
    { s: 'cScore', t: 'cTotal', w: 'cWeight', r: 'cResult' },
  ];

  const totalWeight = parseFloat(document.getElementById("totalWeight").value) || 100;
  let totalPercent = 0;

  data.forEach(item => {
    const score = parseFloat(document.getElementById(item.s).value) || 0;
    const total = parseFloat(document.getElementById(item.t).value) || 1;
    const weight = parseFloat(document.getElementById(item.w).value) || 0;

    // Compute each item's weighted percentage
    const weightedPercent = (score / total) * weight;
    document.getElementById(item.r).innerText = weightedPercent.toFixed(2) + "%";

    totalPercent += weightedPercent;
  });

  // Normalize total percent to the totalWeight
  const finalPercent = (totalPercent / totalWeight) * 100;
  document.getElementById("result-box").innerText = "Your Result: " + finalPercent.toFixed(2) + "%";
}
