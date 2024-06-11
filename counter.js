const eventGoal = 10000000000;
async function fetchProgress(){
  var res = await fetch("https://brawlstars.inbox.supercell.com/data/en/news/content.json", {
    "credentials": "include",
    "headers": {
        "Alt-Used": "brawlstars.inbox.supercell.com",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://brawlstars.inbox.supercell.com/",
    "method": "GET",
    "mode": "cors"
});
  console.log(res.body)
  var json = await res.json();
  var progressPercent = json.entries.eventEntries[0].tracker.progress;
  var progress = Math.round(eventGoal / progressPercent);
  odometer.innerHTML = progress;
  setTimeout(fetchProgress,3000);
};
fetchProgress();
