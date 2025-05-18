function getThisGameNum (thisCampaign) 
{
	let numGames = app.plugins.plugins.dataview.api
		.pages(`"Campaigns/${thisCampaign}"`)
		.where(page => {
			if (String(page.tags).includes("Session")){
				return true;
			}
		}).length;
	
	return numGames+1;
}

module.exports = getThisGameNum;