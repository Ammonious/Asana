module.exports = (Franz, options) => {
  function getTasks() {

    const todayElement = document.querySelectorAll(".dropTargetRow").length;

    Franz.setBadge(todayElement);
  }

  Franz.loop(getTasks);
};
