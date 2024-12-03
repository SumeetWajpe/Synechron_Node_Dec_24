const EventEmitter = require("events");

// publish (emit)
function GetCount(maxIteration) {
  const evt = new EventEmitter();
  //   setTimeout(() => {
  //     evt.emit("start");
  //   }, 3000);

  process.nextTick(() => {
    evt.emit("start");
    let cnt = 0;

    while (cnt < maxIteration) {
      if (cnt == 5) {
        evt.emit("error", cnt);
        break;
      }
      evt.emit("data", cnt++);
    }
    if (cnt == maxIteration) evt.emit("end");
  });
  return evt;
}

// subscribe

const e = GetCount(10); // returns an instance of EventEmitter
e.on("start", () => {
  console.log("Iteration Started");
});
e.on("data", count => {
  console.log(count);
});
e.on("end", () => {
  console.log("Iteration Ended");
});

e.on("error", cnt => {
  console.log("Iteration ended with error count : ", cnt);
});
