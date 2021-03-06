function countVowel(text) {
  let count = 0;
  vowels = "aeiuo";

  text
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        count += 1;
      }
    });
  return count;
}

function passGenerator(basicPassword, serviceName) {
  const vowelCount = countVowel(serviceName);
  let newPassword = null;

  newPassword =
    serviceName.slice(-1) +
    (vowelCount > 0
      ? serviceName.charAt(vowelCount - 1)
      : serviceName.charAt(vowelCount)) +
    basicPassword +
    (serviceName.length - vowelCount) +
    serviceName.charAt(0);
  return newPassword;
}

document.querySelector("#submit").addEventListener("click", () => {
  const basicPassword = document.querySelector("#basicPassword").value;
  const serviceName = document.querySelector("#serviceName").value;

  const password = document.createElement("p");
  password.textContent = passGenerator(basicPassword, serviceName);
  document.querySelector("main").append(password);
});
