const eventGoal = 10000000000;
async function fetchProgress(){
  var res = await fetch("https://brawlstars.inbox.supercell.com/data/en/news/content.json", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
        "Accept": "*/*",
        "Accept-Language": "pl,en-US;q=0.7,en;q=0.3",
        "Alt-Used": "brawlstars.inbox.supercell.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=4",
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
