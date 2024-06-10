const eventGoal = 10000000000;
async function fetchProgress(){
  // Reverse engineerd by lachine
  var res = await fetch('https://brawlstars.inbox.supercell.com/data/en/news/content.json', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Referer': 'https://brawlstars.inbox.supercell.com/',
      'Origin': 'https://btawlstars.inbox.supercell.com'
    }
  });
  var json = await res.json();
  var progressPercent = json.entries.eventEntries[0].tracker.progress;
  var progress = Math.round(eventGoal / progressPercent);
  odometer.innerHTML = progress;
  setTimeout(fetchProgress,3000);
};
fetchProgress();
