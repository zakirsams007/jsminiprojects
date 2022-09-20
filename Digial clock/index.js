const digitalClock = () => {
  let hrs = document.getElementById('hrs');
  let min = document.getElementById('minu');
  var sec = document.getElementById('sec');
  let per = document.getElementById('period');
  let currdate = document.getElementById('date');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let p = ' ';

  // let d = new Date().getFullYear();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  p = hrs < 12 ? (p = 'PM') : (p = 'AM');

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  per.innerHTML = p;
  // currdate.innerHTML = d;
  // console.log(sec);
};
setInterval(digitalClock, 0); // both work----------
// setTimeout(digitalClock);
