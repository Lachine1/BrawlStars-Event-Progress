const eventGoal = 10000000000;
async function fetchProgress(){
  // Reverse engineerd by lachine
  var res = await fetch('https://corsproxy.io/?https%3A%2F%2Fbrawlstars.inbox.supercell.com%2Fdata%2Fen%2Fnews%2Fcontent.jsonn', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
    'Accept': '*/*',
    'Alt-Used': 'brawlstars.inbox.supercell.com',
    'Cookie':  '_sp_id.e079=56605ca7-a112-4068-969d-7f17e8cd843c.1710701679.3.1718047527.1718028414.c006d5f7-b056-4ee5-89f8-41368e2fcab6.b35254d8-4240-45da-bc90-2c77823f0364.0722776e-de58-4e6a-a588-a21ec1ff74ef.1718046689028.9; _sp_ses.e079=*',
    'Referer': 'https://brawlstars.inbox.supercell.com/',
    }
  });
  var json = await res.json();
  var progressPercent = json.entries.eventEntries[0].tracker.progress;
  var progress = Math.round(eventGoal / progressPercent);
  odometer.innerHTML = progress;
  setTimeout(fetchProgress,3000);
};
fetchProgress();
