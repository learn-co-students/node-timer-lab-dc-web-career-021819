let time = parseInt(process.argv[2].replace(/[mins]/g, ""));
let inMins = process.argv[2].includes("min");
if (inMins) {
  time *= 60;
}

const timer = setInterval(() => {
  time--;
  if (time > 0) {
    console.log("Left: " + time + "s");
  }
}, 1000);

if (time === 0) {
  clearInterval(timer);
  process.exit();
}
