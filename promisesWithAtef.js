console.log("She is cooking!");

function spyOnRamdan(_3atfDidIt) {
  return new Promise((resolve, reject) => {
    if (_3atfDidIt) {
      resolve("bravoo!!");
    } else {
      reject("2nta 3abit yabni!");
    }
  });
}

let fromAtafPrespective = spyOnRamdan(true);
fromAtafPrespective
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

let fromKamalPrespective = spyOnRamdan(false);
fromKamalPrespective
.then((data) => console.log(data))
.catch((error) => {
    console.log(error);
});

console.log("She is cleanig!");
