(function () {
  emailjs.init(process.env.public_key);
})();
window.onload = function () {
  document
    .getElementById("contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs
        .sendForm(process.env.serviceID, process.env.templateID, this)
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
