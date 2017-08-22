'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var getMaxItem = function (max) {
    max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    } return max;
  };

  var histogramHeight = 150; // px
  var step = histogramHeight / (getMaxItem() - 1);

  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 120; // px;
  var initialY = 250; // px;

  ctx.textBaseline = 'bottom';

  var getRandomArbitary = function (min, max) {
    min = 0.1;
    max = 1;
    return Math.random() * (max - min) + min;
  };

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomArbitary() + ')';
    }
    var getInitialX = function () {
      return initialX + (indent * i + barWidth * i);
    };
    var getInitialY = function () {
      return initialY - times[i] * step;
    };
    ctx.fillRect(getInitialX(), getInitialY(), barWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), getInitialX(), getInitialY() - 10);
    ctx.fillText(names[i], getInitialX(), initialY + 20);
  }
};
