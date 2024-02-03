ball.onmousedown = function (event)
{
  let shiftX = event.pageX - this.getBoundingClientRect().left;
  let shiftY = event.pageY - this.getBoundingClientRect().top;
  
  // переносит мяч на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
  function moveAt(event)
  {
    ball.style.left = event.pageX - shiftX + 'px';
    if (event.pageY - shiftY <= line.getBoundingClientRect().bottom)
    {
      ball.style.top = line.getBoundingClientRect().bottom + 'px';
    }
    else ball.style.top = event.pageY - shiftY + 'px';
  }
  
  document.addEventListener('mousemove', moveAt);
    
  ball.onmouseup = function()
  {
    document.removeEventListener('mousemove', moveAt);

    minY = circle.getBoundingClientRect().top;
    maxY = circle.getBoundingClientRect().top + circle.getBoundingClientRect().height;
    minX = circle.getBoundingClientRect().left;
    maxX = circle.getBoundingClientRect().left + circle.getBoundingClientRect().width;

    ball.style.transition = `top 4s cubic-bezier(0, 1, 0.6, 1),
                             left 4s cubic-bezier(0, 1, 0.6, 1)`;
    ball.style.top = (Math.random() * (maxY- minY) + minY) - shiftY + 'px';
    ball.style.left = (Math.random() * (maxX- minX) + minX) - shiftX + 'px';
  };

  ball.ontransitionend = function()
  {
    this.style.transition = null;
    this.style.top = line.getBoundingClientRect().bottom + 'px';
    this.style.left = line.getBoundingClientRect().left + 'px';
  }
  
};

ball.ondragstart = function()
{
  return false;
};

  