function calculate() {
      const termData = [
        { s: 'kScore', t: 'kTotal', w: 'kWeight', r: 'kResult' },
        { s: 'tScore', t: 'tTotal', w: 'tWeight', r: 'tResult' },
        { s: 'aScore', t: 'aTotal', w: 'aWeight', r: 'aResult' },
        { s: 'cScore', t: 'cTotal', w: 'cWeight', r: 'cResult' },
      ];

      let termTotal = 0;
      termData.forEach(item => {
        const score = parseFloat(document.getElementById(item.s).value) || 0;
        const total = parseFloat(document.getElementById(item.t).value) || 1;
        const weight = parseFloat(document.getElementById(item.w).value) || 0;

        const percent = (score / total) * weight;
        document.getElementById(item.r).innerText = percent.toFixed(2) + "%";
        termTotal += percent;
      });

      // Final section (CPT + Exam)
      const cptScore = parseFloat(document.getElementById("cptScore").value) || 0;
      const cptTotal = parseFloat(document.getElementById("cptTotal").value) || 1;
      const cptWeight = parseFloat(document.getElementById("cptWeight").value) || 0;
      const cptPercent = (cptScore / cptTotal) * cptWeight;
      document.getElementById("cptResult").innerText = cptPercent.toFixed(2) + "%";

      const examScore = parseFloat(document.getElementById("examScore").value) || 0;
      const examTotal = parseFloat(document.getElementById("examTotal").value) || 1;
      const examWeight = parseFloat(document.getElementById("examWeight").value) || 0;
      const examPercent = (examScore / examTotal) * examWeight;
      document.getElementById("examResult").innerText = examPercent.toFixed(2) + "%";

      // Term mark (70%) + Final (30%)
      const termWeighted = termTotal * 0.7;
      const finalWeighted = (cptPercent + examPercent) * 0.3;
      const overall = termWeighted + finalWeighted;

      document.getElementById("result-box").innerText =
        "Your Result: " + overall.toFixed(1) + "%";
    }
  </script>
