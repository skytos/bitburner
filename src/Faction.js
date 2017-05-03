//Netburner Faction class
function Faction(name) {
	this.name 				= name;
    this.augmentations 		= [];   //Name of augmentation only
	this.info 		        = "";	//Introductory/informational text about the faction
    
    //Player-related properties for faction
	this.isMember 			= false; 	//Whether player is member
    this.isBanned           = false;    //Whether or not player is banned from joining this faction
    this.playerReputation 	= 0;  		//"Reputation" within faction
    
    //Multipliers for unlocking and purchasing augmentations
    this.augmentationPriceMult = 1;
    this.augmentationRepRequirementMult = 1;
};

Faction.prototype.setAugmentationMultipliers = function(price, rep) {
    this.augmentationPriceMult = price;
    this.augmentationRepRequirementMult = rep;
}

Faction.prototype.setInfo = function(inf) {
	this.info = inf;
}

Faction.prototype.toJSON = function() {
	return Generic_toJSON("Faction", this);
}

Faction.fromJSON = function(value) {
	return Generic_fromJSON(Faction, value.data);
}

Reviver.constructors.Faction = Faction;

//Map of factions indexed by faction name
Factions = {}

AddToFactions = function(faction) {
	var name = faction.name;
	Factions[name] = faction;
}

//TODO Augmentation price and rep requirement mult are 1 for everything right now,
//      This might change in the future for balance
initFactions = function() {
	//Endgame
	var Illuminati 				= new Faction("Illuminati");
    Illuminati.setInfo(FactionInfo.IlluminatiInfo);
	AddToFactions(Illuminati);
	var Daedalus 				= new Faction("Daedalus");
    Daedalus.setInfo(FactionInfo.DaedalusInfo);
	AddToFactions(Daedalus);
	var Covenant 				= new Faction("The Covenant");
    Covenant.setInfo(FactionInfo.CovenantInfo);
	AddToFactions(Covenant);
	
	//Megacorporations, each forms its own faction
	var ECorp 					= new Faction("ECorp");
    ECorp.setInfo(FactionInfo.ECorpInfo);
	AddToFactions(ECorp);
	var MegaCorp 				= new Faction("MegaCorp");
    MegaCorp.setInfo(FactionInfo.MegaCorpInfo);
	AddToFactions(MegaCorp);
	var BachmanAndAssociates 	= new Faction("Bachman & Associates");
    BachmanAndAssociates.setInfo(FactionInfo.BachmanAndAssociatesInfo);
	AddToFactions(BachmanAndAssociates);
	var BladeIndustries 		= new Faction("Blade Industries");
    BladeIndustries.setInfo(FactionInfo.BladeIndustriesInfo);
	AddToFactions(BladeIndustries);
	var NWO 					= new Faction("NWO");
    NWO.setInfo(FactionInfo.NWOInfo);
	AddToFactions(NWO);
	var ClarkeIncorporated 		= new Faction("Clarke Incorporated");
    ClarkeIncorporated.setInfo(FactionInfo.ClarkeIncorporatedInfo);
	AddToFactions(ClarkeIncorporated);
	var OmniTekIncorporated 	= new Faction("OmniTek Incorporated");
    OmniTekIncorporated.setInfo(FactionInfo.OmniTekIncorporatedInfo);
	AddToFactions(OmniTekIncorporated);
	var FourSigma 				= new Faction("Four Sigma");
    FourSigma.setInfo(FactionInfo.FourSigmaInfo);
	AddToFactions(FourSigma);
	var KuaiGongInternational 	= new Faction("KuaiGong International");
    KuaiGongInternational.setInfo(FactionInfo.KuaiGongInternationalInfo);
	AddToFactions(KuaiGongInternational);
    
    //Other corporations
    var FulcrumTechnologies     = new Faction("Fulcrum Secret Technologies");
    FulcrumTechnologies.setInfo(FactionInfo.FulcrumSecretTechnologiesInfo);
    AddToFactions(FulcrumTechnologies);
	
	//Hacker groups
	var BitRunners 				= new Faction("BitRunners");
    BitRunners.setInfo(FactionInfo.BitRunnersInfo);
	AddToFactions(BitRunners);
	var BlackHand				= new Faction("The Black Hand");
    BlackHand.setInfo(FactionInfo.BlackHandInfo);
	AddToFactions(BlackHand);
	var NiteSec 				= new Faction("NiteSec");
    NiteSec.setInfo(FactionInfo.NiteSecInfo);
	AddToFactions(NiteSec);
	
	//City factions, essentially governments
	var Chongqing 				= new Faction("Chongqing");
    Chongqing.setInfo(FactionInfo.ChongqingInfo);
	AddToFactions(Chongqing);
	var Sector12 				= new Faction("Sector-12");
    Sector12.setInfo(FactionInfo.Sector12Info);
	AddToFactions(Sector12);
	var NewTokyo				= new Faction("New Tokyo");
    NewTokyo.setInfo(FactionInfo.NewTokyoInfo);
	AddToFactions(NewTokyo);
	var Aevum 				    = new Faction("Aevum");
    Aevum.setInfo(FactionInfo.AevumInfo);
	AddToFactions(Aevum);
    var Ishima                 	= new Faction("Ishima");
    Ishima.setInfo(FactionInfo.IshimaInfo);
	AddToFactions(Ishima);
	var Volhaven 				= new Faction("Volhaven");
    Volhaven.setInfo(FactionInfo.VolhavenInfo);
	AddToFactions(Volhaven);
	
	//Criminal Organizations/Gangs
	var SpeakersForTheDead		= new Faction("Speakers for the Dead"); 
    SpeakersForTheDead.setInfo(FactionInfo.SpeakersForTheDeadInfo);
	AddToFactions(SpeakersForTheDead);
	var DarkArmy				= new Faction("The Dark Army");
    DarkArmy.setInfo(FactionInfo.DarkArmyInfo);
	AddToFactions(DarkArmy);
	var TheSyndicate 			= new Faction("The Syndicate");
    TheSyndicate.setInfo(FactionInfo.TheSyndicateInfo);
	AddToFactions(TheSyndicate);
    var Silhouette              = new Faction("Silhouette");
    Silhouette.setInfo(FactionInfo.SilhouetteInfo);
    AddToFactions(Silhouette);
	
	//Earlygame factions - factions the player will prestige with early on that don't
	//belong in other categories
    var Netburners              = new Faction("Netburners");
    Netburners.setInfo(FactionInfo.NetburnersInfo);
    AddToFactions(Netburners);
	var TianDiHui				= new Faction("Tian Di Hui");	//Society of the Heaven and Earth
    TianDiHui.setInfo(FactionInfo.TianDiHuiInfo);
	AddToFactions(TianDiHui);
	var CyberSec 				= new Faction("CyberSec");
    CyberSec.setInfo(FactionInfo.CyberSecInfo);
    CyberSec.setAugmentationMultipliers(0.8, 0.8);
	AddToFactions(CyberSec);
}

//This function sets the requirements to join a Faction. It checks whether the Player meets
//those requirements and will return an array of all factions that the Player should
//receive an invitation to
PlayerObject.prototype.checkForFactionInvitations = function() {
    if (Engine.Debug) {
        console.log("checkForFactionInvitations() called");
    }
    invitedFactions = []; //Array which will hold all Factions th eplayer should be invited to
    
    var company = Companies[this.companyName];
    var companyRep = 0;
    if (company != null) {
        companyRep = company.playerReputation;
    }
    
    //Illuminati
    var illuminatiFac = Factions["Illuminati"];
    if (illuminatiFac.isBanned == false && illuminatiFac.isMember == false &&
        this.numAugmentations >= 10 && 
        this.money >= 10000000000 && this.total_money >= 20000000000 &&
        this.hacking_skill >= 800 && this.total_hacking >= 7000 &&
        this.strength >= 900 && this.total_strength >= 10000 && 
        this.defense >= 900 && this.total_defense >= 10000 &&
        this.dexterity >= 900 && this.total_dexterity >= 10000 && 
        this.agility >= 900 && this.total_agility >= 10000) {
        invitedFactions.push(illuminatiFac);
    }
        
    //Daedalus
    var daedalusFac = Factions["Daedalus"];
    if (daedalusFac.isBanned == false && daedalusFac.isMember == false &&
        this.numAugmentations >= 15 && 
        this.money >= 1000000000 && this.total_money >= 10000000000 &&
        this.hacking_skill >= 1000 && this.total_hacking >= 10000 &&
        this.strength >= 500 && this.total_strength >= 8000 && 
        this.defense >= 500 && this.total_defense >= 8000 &&
        this.dexterity >= 500 && this.total_dexterity >= 8000 && 
        this.agility >= 500 && this.total_agility >= 8000) {
        invitedFactions.push(daedalusFac);
    }
    
    //The Covenant
    var covenantFac = Factions["The Covenant"];
    if (covenantFac.isBanned == false && covenantFac.isMember == false &&
        this.numAugmentations >= 12 &&
        this.money >= 5000000000 && this.total_money >= 10000000000 &&
        this.hacking_skill >= 850 && this.total_hack >= 5000 && 
        this.strength >= 850 && this.total_strength >= 5000 &&
        this.defense >= 850 && this.total_defense >= 5000 &&
        this.dexterity >= 850 && this.total_dexterity >= 5000 &&
        this.agility >= 850 && this.total_agility >= 5000) {
        invitedFactions.push(covenantFac);
    }
    
    //ECorp
    var ecorpFac = Factions["ECorp"];
    if (ecorpFac.isBanned == false && ecorpFac.isMember == false && 
        this.companyName == Locations.AevumECorp && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(ecorpFac);
    }
    
    //MegaCorp
    var megacorpFac = Factions["MegaCorp"];
    if (megacorpFac.isBanned == false && megacorpFac.isMember == false && 
        this.companyName == Locations.Sector12MegaCorp && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(megacorpFac);
    }
        
    //Bachman & Associates
    var bachmanandassociatesFac = Factions["Bachman & Associates"];
    if (bachmanandassociatesFac.isBanned == false && bachmanandassociatesFac.isMember == false &&
        this.companyName == Locations.AevumBachmanAndAssociates && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(bachmanandassociatesFac);
    }
    
    //Blade Industries
    var bladeindustriesFac = Factions["Blade Industries"];
    if (bladeindustriesFac.isBanned == false && bladeindustriesFac.isMember == false && 
        this.companyName == Locations.Sector12BladeIndustries && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(bladeindustriesFac);
    }
    
    //NWO
    var nwoFac = Factions["NWO"];
    if (nwoFac.isBanned == false && nwoFac.isMember == false && 
        this.companyName == Locations.VolhavenNWO && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(nwoFac);
    }
    
    //Clarke Incorporated
    var clarkeincorporatedFac = Factions["Clarke Incorporated"];
    if (clarkeincorporatedFac.isBanned == false && clarkeincorporatedFac.isMember == false &&
        this.companyName == Locations.AevumClarkeIncorporated && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(clarkeincorporatedFac);
    }
    
    //OmniTek Incorporated
    var omnitekincorporatedFac = Factions["OmniTek Incorporated"];
    if (omnitekincorporatedFac.isBanned == false && omnitekincorporatedFac.isMember == false &&
        this.companyName == Locations.VolhavenOmniTekIncorporated && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(omnitekincorporatedFac);
    }
    
    //Four Sigma
    var foursigmaFac = Factions["Four Sigma"];
    if (foursigmaFac.isBanned == false && foursigmaFac.isMember == false && 
        this.companyName == Locations.Sector12FourSigma && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(foursigmaFac);
    }
    
    //KuaiGong International
    var kuaigonginternationalFac = Factions["KuaiGong International"];
    if (kuaigonginternationalFac.isBanned == false && kuaigonginternationalFac.isMember == false &&
        this.companyName == Locations.ChongqingKuaiGongInternational && companyRep >= CONSTANTS.CorpFactionRepRequirement) {
        invitedFactions.push(kuaigonginternationalFac);
    }
    
    //Fulcrum Secret Technologies - If u've unlocked fulcrum secret technolgoies server and have a high rep with the company
    var fulcrumsecrettechonologiesFac = Factions["Fulcrum Secret Technologies"];
    var fulcrumSecretServer = AllServers[SpecialServerIps["Fulcrum Secret Technologies Server"]];
    if (fulcrumSecretServer == null) {
        console.log("Error: Could not find Fulcrum Secret Technologies Server");
    }
    if (fulcrumsecrettechonologiesFac.isBanned == false && fulcrumsecrettechonologiesFac.isMember == false &&
        fulcrumSecretServer.hasAdminRights && 
        this.companyName == Locations.AevumFulcrumTechnologies && companyRep >= 250000) {
        invitedFactions.push(fulcrumsecrettechonologiesFac);
    }
    
    //BitRunners
    var bitrunnersFac = Factions["BitRunners"];
    var homeComp = Player.getHomeComputer();
    if (bitrunnersFac.isBanned == false && bitrunnersFac.isMember == false &&
        this.hacking_skill >= 600 && homeComp.maxRam >= 32) {
        invitedFactions.push(bitrunnersFac);
    }
    
    //The Black Hand
    var theblackhandFac = Factions["The Black Hand"];
    if (theblackhandFac.isBanned == false && theblackhandFac.isMember == false &&
        this.hacking_skill >= 400 && this.strength >= 300 && this.defense >= 300 &&
        this.agility >= 300 && this.dexterity >= 300 && homeComp.maxRam >= 16) {
        invitedFactions.push(theblackhandFac);
    }
    
    //NiteSec
    var nitesecFac = Factions["NiteSec"];
    if (nitesecFac.isBanned == false && nitesecFac.isMember == false && 
        this.hacking_skill >= 500 && homeComp.maxRam >= 32) {
        invitedFactions.push(nitesecFac);
    }
    
    //Chongqing
    var chongqingFac = Factions["Chongqing"];
    if (chongqingFac.isBanned == false && chongqingFac.isMember == false &&
        this.money >= 20000000 && this.location == Locations.Chongqing) {
        invitedFactions.push(chongqingFac);
    }
    
    //Sector-12
    var sector12Fac = Factions["Sector-12"];
    if (sector12Fac.isBanned == false && sector12Fac.isMember == false && 
        this.money >= 50000000 && this.location == Locations.Sector12) {
        invitedFactions.push(sector12Fac);
    }
    
    //New Tokyo
    var newtokyoFac = Factions["New Tokyo"];
    if (newtokyoFac.isBanned == false && newtokyoFac.isMember == false && 
        this.money >= 20000000 && this.location == Locations.NewTokyo) {
        invitedFactions.push(newtokyoFac);
    }
    
    //Aevum
    var aevumFac = Factions["Aevum"];
    if (aevumFac.isBanned == false && aevumFac.isMember == false && 
        this.money >= 40000000 && this.location == Locations.Aevum) {
        invitedFactions.push(aevumFac);
    }
    
    //Ishima
    var ishimaFac = Factions["Ishima"];
    if (ishimaFac.isBanned == false && ishimaFac.isMember == false &&
        this.money >= 30000000 && this.location == Locations.Ishima) {
        invitedFactions.push(ishimaFac);
    }
    
    //Volhaven
    var volhavenFac = Factions["Volhaven"];
    if (volhavenFac.isBanned == false && volhavenFac.isMember == false && 
        this.money >= 50000000 && this.location == Locations.Volhaven) {
        invitedFactions.push(volhavenFac);
    }
    
    //Speakers for the Dead
    var speakersforthedeadFac = Factions["Speakers for the Dead"];
    if (speakersforthedeadFac.isBanned == false && speakersforthedeadFac.isMember == false && 
        this.hacking_skill >= 100 && this.strength >= 300 && this.defense >= 300 && 
        this.dexterity >= 300 && this.agility >= 300 && this.numPeopleKilled >= 10 &&
        this.numPeopleKilledTotal >= 100 && this.karma <= -50 && this.companyName != Locations.Sector12CIA &&
        this.companyName != Locations.Sector12NSA) {
        invitedFactions.push(speakersforthedeadFac);
    }   
        
    //The Dark Army
    var thedarkarmyFac = Factions["The Dark Army"];
    if (thedarkarmyFac.isBanned == false && thedarkarmyFac.isMember == false && 
        this.hacking_skill >= 300 && this.strength >= 300 && this.defense >= 300 && 
        this.dexterity >= 300 && this.agility >= 300 && this.location == Locations.Chongqing && 
        this.numPeopleKilled >= 5 && this.karma <= -50 && this.companyName != Locations.Sector12CIA && 
        this.companyName != Locations.Sector12NSA) {
        invitedFactions.push(thedarkarmyFac);
    }
    
    //The Syndicate
    var thesyndicateFac = Factions["The Syndicate"];
    if (thesyndicateFac.isBanned == false && thesyndicateFac.isMember == false &&
        this.hacking_skill >= 200 && this.strength >= 200 && this.defense >= 200 &&
        this.dexterity >= 200 && this.agility >= 200 && 
        (this.location == Locations.Aevum || this.location == Locations.Sector12) &&
        this.money >= 10000000 && this.karma <= -100 && 
        this.companyName != Locations.Sector12CIA && this.companyName != Locations.Sector12NSA) {
        invitedFactions.push(thesyndicateFac);
    }
    
    //Silhouette
    var silhouetteFac = Factions["Silhouette"];
    if (silhouetteFac.isBanned == false && silhouetteFac.isMember == false && 
        (this.companyPosition.positionName == CompanyPositions.CTO.positionName || 
         this.companyPosition.positionName == CompanyPositions.CFO.positionName || 
         this.companyPosition.positionName == CompanyPositions.CEO.positionName) &&
         this.money >= 15000000 && this.karma <= -25) {
        invitedFactions.push(silhouetteFac);
    }
    
    //Netburners
    var netburnersFac = Factions["Netburners"];
    var totalHacknetRam = 0;
    var totalHacknetCores = 0;
    var totalHacknetLevels = 0;
    for (var i = 0; i < Player.hacknetNodes.length; ++i) {
        totalHacknetLevels += Player.hacknetNodes[i].level;
        totalHacknetRam += Player.hacknetNodes[i].ram;
        totalHacknetCores += Player.hacknetNodes[i].numCores;
    }
    if (netburnersFac.isBanned == false && netburnersFac.isMember == false &&
        this.hacking_skill >= 100 && totalHacknetRam >= 10 && 
        totalHacknetCores >= 5 && totalHacknetLevels >= 100) {
        invitedFactions.push(netburnersFac);
    }
    
    //Tian Di Hui
    var tiandihuiFac = Factions["Tian Di Hui"];
    if (tiandihuiFac.isBanned == false && tiandihuiFac.isMember == false && 
        this.money >= 1000000 && this.hacking_skill >= 50 &&
        (this.location == Locations.Chongqing || this.location == Locations.NewTokyo || 
         this.location == Locations.Ishima)) {
        invitedFactions.push(tiandihuiFac);
    }
    
    //CyberSec
    var cybersecFac = Factions["CyberSec"];
    if (cybersecFac.isBanned == false && cybersecFac.isMember == false && 
        this.hacking_skill >= 50) {
        invitedFactions.push(cybersecFac);
    }
    
    return invitedFactions;
}

inviteToFaction = function(faction) {
    if (Engine.Debug) {
        console.log("inviteToFaction() called with faction: " + faction.name);
    }
    factionInvitationBoxCreate(faction);
}

joinFaction = function(faction) {
	faction.isMember = true;
    Player.factions.push(faction.name);
    
    //Determine what factions you are banned from now that you have joined this faction
    if (faction.name == "BitRunners") {
        Factions["The Black Hand"].isBanned = true;
        Factions["NiteSec"].isBanned = true;
    } else if (faction.name == "The Black Hand") {
        Factions["BitRunners"].isBanned = true;
        Factions["NiteSec"].isBanned = true;
    } else if (faction.name == "NiteSec") {
        Factions["BitRunners"].isBanned = true;
        Factions["The Black Hand"].isBanned = true;
    } else if (faction.name == "Chongqing") {
        Factions["Sector-12"].isBanned = true;
        Factions["Aevum"].isBanned = true;
        Factions["Volhaven"].isBanned = true;
    } else if (faction.name == "Sector-12") {
        Factions["Chongqing"].isBanned = true;
        Factions["New Tokyo"].isBanned = true;
        Factions["Ishima"].isBanned = true;
        Factions["Volhaven"].isBanned = true;
    } else if (faction.name == "New Tokyo") {
        Factions["Sector-12"].isBanned = true;
        Factions["Aevum"].isBanned = true;
        Factions["Volhaven"].isBanned = true;
    } else if (faction.name == "Aevum") {
        Factions["Chongqing"].isBanned = true;
        Factions["New Tokyo"].isBanned = true;
        Factions["Ishima"].isBanned = true;
        Factions["Volhaven"].isBanned = true;
    } else if (faction.name == "Ishima") {
        Factions["Sector-12"].isBanned = true;
        Factions["Aevum"].isBanned = true;
        Factions["Volhaven"].isBanned = true;
    } else if (faction.name == "Volhaven") {
        Factions["Chongqing"].isBanned = true;
        Factions["Sector-12"].isBanned = true;
        Factions["New Tokyo"].isBanned = true;
        Factions["Aevum"].isBanned = true;
        Factions["Ishima"].isBanned = true;
    }
}

leaveFaction = function(faction) {
    faction.isMember = false;
    var i = Player.factions.indexOf(faction.name);
    if (i > -1) {
        Player.factions.splice(i, 1);
    }
    
    //Unban from faction
    if (faction.name == "BitRunners") {
        Factions["The Black Hand"].isBanned = false;
        Factions["NiteSec"].isBanned = false;
    } else if (faction.name == "The Black Hand") {
        Factions["BitRunners"].isBanned = false;
        Factions["NiteSec"].isBanned = false;
    } else if (faction.name == "NiteSec") {
        Factions["BitRunners"].isBanned = false;
        Factions["The Black Hand"].isBanned = false;
    } else if (faction.name == "Chongqing") {
        Factions["Sector-12"].isBanned = false;
        Factions["Aevum"].isBanned = false;
        Factions["Volhaven"].isBanned = false;
    } else if (faction.name == "Sector-12") {
        Factions["Chongqing"].isBanned = false;
        Factions["New Tokyo"].isBanned = false;
        Factions["Ishima"].isBanned = false;
        Factions["Volhaven"].isBanned = false;
    } else if (faction.name == "New Tokyo") {
        Factions["Sector-12"].isBanned = false;
        Factions["Aevum"].isBanned = false;
        Factions["Volhaven"].isBanned = false;
    } else if (faction.name == "Aevum") {
        Factions["Chongqing"].isBanned = false;
        Factions["New Tokyo"].isBanned = false;
        Factions["Ishima"].isBanned = false;
        Factions["Volhaven"].isBanned = false;
    } else if (faction.name == "Ishima") {
        Factions["Sector-12"].isBanned = false;
        Factions["Aevum"].isBanned = false;
        Factions["Volhaven"].isBanned = false;
    } else if (faction.name == "Volhaven") {
        Factions["Chongqing"].isBanned = false;
        Factions["Sector-12"].isBanned = false;
        Factions["New Tokyo"].isBanned = false;
        Factions["Aevum"].isBanned = false;
        Factions["Ishima"].isBanned = false;
    }
}

//Displays the HTML content for a specific faction
displayFactionContent = function(factionName) {
	var faction = Factions[factionName];
    document.getElementById("faction-name").innerHTML = factionName;
    document.getElementById("faction-info").innerHTML = faction.info;
    document.getElementById("faction-reputation").innerHTML = "Reputation: " + faction.playerReputation.toFixed(3);
	
	var hackDiv 			= document.getElementById("faction-hack-div");
	var fieldWorkDiv 		= document.getElementById("faction-fieldwork-div");
	var securityWorkDiv 	= document.getElementById("faction-securitywork-div");
	
	var hackButton 			= document.getElementById("faction-hack-button");
	var fieldWorkButton 	= document.getElementById("faction-fieldwork-button");
	var securityWorkButton 	= document.getElementById("faction-securitywork-button");
	
	//Set new event listener for all of the work buttons
    //The old buttons need to be replaced to clear the old event listeners
    var newHackButton = hackButton.cloneNode(true);
    var newFieldWorkButton = fieldWorkButton.cloneNode(true);
    var newSecurityWorkButton = securityWorkButton.cloneNode(true);
    
    hackButton.parentNode.replaceChild(newHackButton, hackButton);
    fieldWorkButton.parentNode.replaceChild(newFieldWorkButton, fieldWorkButton);
    securityWorkButton.parentNode.replaceChild(newSecurityWorkButton, securityWorkButton);
    
    newHackButton.addEventListener("click", function() {
        Player.startFactionHackWork(faction);
        return false;
    });
    
    newFieldWorkButton.addEventListener("click", function() {
        Player.startFactionFieldWork(faction);
        return false;
    });
    
    newSecurityWorkButton.addEventListener("click", function() {
        Player.startFactionSecurityWork(faction);
        return false;
    });
    
    
    //Set new event listener for the purchase augmentation buttons
    //The old button needs to be replaced to clear the old event listeners
    var purchaseAugmentations = document.getElementById("faction-purchase-augmentations");    
    var newPurchaseAugmentationsButton = purchaseAugmentations.cloneNode(true);
    purchaseAugmentations.parentNode.replaceChild(newPurchaseAugmentationsButton, purchaseAugmentations);
    
    newPurchaseAugmentationsButton.addEventListener("click", function() {
        Engine.hideAllContent();
        Engine.Display.factionAugmentationsContent.style.visibility = "visible";
        
        var backButton = document.getElementById("faction-augmentations-back-button");
        var newBackButton = backButton.cloneNode(true);
        backButton.parentNode.replaceChild(newBackButton, backButton);
        newBackButton.addEventListener("click", function() {
            Engine.loadFactionContent();
            displayFactionContent(factionName);
            return false; 
        });
        displayFactionAugmentations(factionName);
        return false;
    });
	
	if (faction.isMember) {
		switch(faction.name) {
			case "Illuminati":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "none";
				break;
			case "Daedalus":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "none";
				break;
			case "The Covenant":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "none";
				break;
			case "ECorp":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "MegaCorp":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Bachman & Associates":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Blade Industries":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "NWO":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Clarke Incorporated":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "OmniTek Incorporated":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Four Sigma":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "KuaiGong International":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "BitRunners":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "none";
				securityWorkDiv.style.display = "none";
				break;
			case "The Black Hand":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "none";
				break;
			case "NiteSec":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "none";
				securityWorkDiv.style.display = "none";
				break;
			case "Chongqing":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Sector-12":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "New Tokyo":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Aevum":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Ishima":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Volhaven":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "Speakers for the Dead":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
			case "The Dark Army":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "none";
				break;
			case "The Syndicate":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "inline";
				securityWorkDiv.style.display = "inline";
				break;
            case "Silhouette":
                hackDiv.style.display = "inline";
                fieldWorkDiv.style.display = "inline";
                securityWorkDiv.style.display = "none";
            case "Netburners":
                hackDiv.style.display = "inline";
                fieldWorkDiv.style.display = "none";
                securityWorkDiv.style.display = "none";
			case "Tian Di Hui":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "none";
				securityWorkDiv.style.display = "inline";
				break;
			case "CyberSec":
				hackDiv.style.display = "inline";
				fieldWorkDiv.style.display = "none";
				securityWorkDiv.style.display = "none";
				break;
			default:
				console.log("Faction does not exist");
				break;
		}
	} else {
		console.log("Not a member of this faction, cannot display faction information");
	}
}

displayFactionAugmentations = function(factionName) {
    document.getElementById("faction-augmentations-page-desc").innerHTML = "Lists all augmentations that are available to purchase from" + factionName;
    var faction = Factions[factionName];
    
    var augmentationsList = document.getElementById("faction-augmentations-list");
    while (augmentationsList.firstChild) {
        augmentationsList.removeChild(augmentationsList.firstChild);
    }
    
    for (var i = 0; i < faction.augmentations.length; ++i) {
        var aug = Augmentations[faction.augmentations[i]];
        var item = document.createElement("li");
        var span = document.createElement("span");
        var aElem = document.createElement("a");
        var pElem = document.createElement("p");
        aElem.setAttribute("href", "#");
        var req = aug.baseRepRequirement * faction.augmentationRepRequirementMult;
        if (faction.playerReputation >= req) {
            aElem.setAttribute("class", "a-link-button");
            pElem.innerHTML = "UNLOCKED";
            //TODO Event listener for button to purchase augmentation
        } else {
            aElem.setAttribute("class", "a-link-button-inactive");
            pElem.innerHTML = "LOCKED (Requires " + req + " faction reputation)";
            pElem.style.color = "red";
        }
        aElem.style.display = "inline-block";
        pElem.style.display = "inline-block";
        aElem.innerHTML = aug.name;
        
        aElem.addEventListener("click", function() {
            console.log("here");
            purchaseAugmentationBoxCreate(aug, faction);
        });
        
        span.appendChild(aElem);
        span.appendChild(pElem);
        
        item.appendChild(span);
        
        augmentationsList.appendChild(item);
    }
}