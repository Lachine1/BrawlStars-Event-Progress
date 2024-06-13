const eventGoal = 10000000000;
async function fetchProgress(){
  var res = await fetch("https://corsproxy.io/?https%3A%2F%2Fbrawlstars.inbox.supercell.com%2Fdata%2Fen%2Fnews%2Fcontent.json", {
    "credentials": "include",
    "headers": {
        "Alt-Used": "brawlstars.inbox.supercell.com",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "method": "GET",
    "mode": "no-cors"
});
  console.log(res.body)
  var json = await res.json();
  var progressPercent = json.entries.eventEntries[0].tracker.progress;
  var progress = Math.round(eventGoal / progressPercent);
  odometer.innerHTML = progress;
  setTimeout(fetchProgress,3000);
};
fetchProgress();
