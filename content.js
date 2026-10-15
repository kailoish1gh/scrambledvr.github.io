// =====================================================================================
//  SCRAMBLED WEBSITE: EVERY WORD AND LINK ON THE SITE LIVES IN THIS FILE.
//
//  To change something, edit the text between the two ` marks (the key left of 1).
//  Rules that keep the site working:
//    - keep the ` mark at the start and end of each piece of text
//    - keep the comma after each line
//    - apostrophes ( ' ) and quotes ( " ) are fine inside the text
//  Lines that start with // are notes like this one. The site ignores them.
// =====================================================================================

window.SITE = {

  // ---------- LINKS ----------
  discord:   `https://discord.gg/r4uytzF48Z`,
  youtube:   `https://www.youtube.com/@Scrambled-Vr-Official`,
  // Paste the Meta Horizon Store link between the ` marks when the game is up.
  // While it's empty, the store buttons say "coming soon".
  metaStore: ``,

  // The trailer: plays muted behind the top of the page, and with sound from the WATCH buttons.
  trailer:       `video/trailer.mp4`,
  // Optional: a still picture shown while the trailer loads (for example images/trailer-poster.jpg).
  trailerPoster: ``,

  // ---------- BUTTONS ----------
  storeSoon:      `META QUEST: COMING SOON`,
  storeLive:      `GET IT ON META QUEST`,
  watchTrailer:   `WATCH THE TRAILER`,
  watchWithSound: `WATCH WITH SOUND`,
  trailerMissing: `The trailer is on its way. Check back soon.`,

  // ---------- TOP OF THE PAGE ----------
  title:   `SCRAMBLED`,
  tagline: `A multiplayer VR game for Meta Quest where everyone's an egg. There's no joystick: swing your arms to run, climb and jump around with your friends.`,

  // ---------- MODES ----------
  // One key per mode. "image" is the picture on the screen: swap in a screenshot any time
  // (for example images/forest.jpg). "wearing" is what the egg in the picture has on.
  modesTitle:   `MODES`,
  modesText:    `Every game starts in Egg Central. From there, go anywhere.`,
  wearingLabel: `WEARING`,
  modes: [
    { name: `EGG CENTRAL`, color: `#FFB000`, image: `images/modes/egg-central.svg`, wearing: `TOPPAT + BOW TIE`,
      text: `The hub, and where every game starts. Shop, try things on in the wardrobe, check the leaderboard, then head into any mode.` },
    { name: `THE FOREST`,  color: `#4FD17E`, image: `images/modes/forest.svg`,      wearing: `BEANIE + COZY SCARF`,
      text: `Tall trees, thick bushes, and something big that hunts eggs after dark. Stay together.` },
    { name: `THE CAVES`,   color: `#B08CFF`, image: `images/modes/caves.svg`,       wearing: `DEERSTALKER + MAGNIFYING GLASS`,
      text: `Torch-lit tunnels full of glowing crystals, with a prize hidden somewhere down there.` },
    { name: `ONLY UP`,     color: `#4FB4FF`, image: `images/modes/only-up.svg`,     wearing: `PROPELLER CAP + JETPACK`,
      text: `A tower that only goes one way. Fly up it with your gauntlet jets, and try not to fall back to the start.` },
    { name: `INFECTION`,   color: `#F2D23C`, image: `images/modes/infection.svg`,   wearing: `SWEATBAND`,
      text: `One egg starts infected and turns yellow. Every tag spreads it, until there's nobody left to catch.` },
    { name: `DISASTERS`,   color: `#FF6A3A`, image: `images/modes/disasters.svg`,   wearing: `UMBRELLA`,
      text: `Tornadoes, floods, meteor showers, volcanoes and more. Last until the round ends to win it.` },
    { name: `MINIGAMES`,   color: `#FF5FAE`, image: `images/modes/minigames.svg`,   wearing: `HEADPHONES + COOL SHADES`,
      text: `Arcade machines, and an UNO table where you can play your friends or the robots.` },
  ],

  // ---------- WARDROBE ----------
  wardrobeTitle: `WARDROBE`,
  wardrobeText:  `Spend gold on hats, skins and gadgets, then show them off in every lobby. A few from the shop:`,
  wardrobe: [
    { name: `CAT-TASTIC`,  image: `images/wardrobe/cat-ears.svg` },
    { name: `CHEF HAT`,    image: `images/wardrobe/chef-hat.svg` },
    { name: `CROWN`,       image: `images/wardrobe/crown.svg` },
    { name: `DEVIL HORNS`, image: `images/wardrobe/devil-horns.svg` },
    { name: `GALAXY`,      image: `images/wardrobe/galaxy.svg` },
    { name: `24K GOLD`,    image: `images/wardrobe/gold.svg` },
    { name: `PIRATE HAT`,  image: `images/wardrobe/pirate.svg` },
    { name: `WIZARD HAT`,  image: `images/wardrobe/wizard.svg` },
  ],

  // ---------- SCREENSHOTS (optional) ----------
  // Add screenshots here and a strip of them shows up under the wardrobe. Example:
  //   { image: `images/shot-1.jpg`, caption: `Only Up, almost at the top` },
  screenshotsTitle: `SCREENSHOTS`,
  screenshots: [
  ],

  // ---------- TRAILER (middle of the page) ----------
  trailerTitle: `TRAILER`,

  // ---------- COMMUNITY ----------
  communityTitle: `COMMUNITY`,
  discordName:    `DISCORD`,
  discordText:    `Updates, events, people to play with, and the team that makes the game.`,
  discordButton:  `JOIN THE SERVER`,
  youtubeName:    `YOUTUBE`,
  youtubeText:    `Trailers, update videos and clips, on @Scrambled-Vr-Official.`,
  youtubeButton:  `SUBSCRIBE`,

  // ---------- BOTTOM OF THE PAGE ----------
  footerTagline: `A multiplayer VR game for Meta Quest.`,
  footerNote:    `Meta and Meta Quest are trademarks of Meta Platforms, Inc.`,
};
