// Triangle calculation

document.getElementById("tri-cal").addEventListener("click", function () {
  const triangleBase = document.getElementById("tri-base");

  const triangleHeight = document.getElementById("tri-height");

  const triangleBaseString = triangleBase.value;

  const triangleHeightString = triangleHeight.value;

  const triangleBaseValue = parseInt(triangleBaseString);

  const triangleHeightValue = parseInt(triangleHeightString);

  const totalCal = 0.5 * triangleBaseValue * triangleHeightString;

  const ansWer = document.getElementById("answer");

  ansWer.innerText = totalCal;
});
document.getElementById("rec-cal").addEventListener("click", function () {
  const recWeight = document.getElementById("rec-weight");

  const recLength = document.getElementById("rec-length");

  const recWeightString = recWeight.value;

  const recLengthString = recLength.value;

  const recWeightValue = parseInt(recWeightString);

  const recLengthtValue = parseInt(recLengthString);

  const totalCal = recWeightValue * recLengthtValue;

  const ansWer = document.getElementById("answer");

  ansWer.innerText = totalCal;
});
