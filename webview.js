module.exports = (Franz, options) => {
  function getTasks() {


    const todayElement = document.querySelectorAll(".dropTargetRow").length;
  //  const inboxElement = document.querySelector("#filter_inbox .counter");

    Franz.setBadge(todayElement);
  }

  Franz.loop(getTasks);
};
