// Slide texts copied word for word from textes.md. The CTA is added automatically as the last slide.
var CTA = {
  couples: { titre: "Different time zones, no time to call? Post your side of the challenge. They'll see it when they wake up.", note: "this way" },
  amis: { titre: "Can't find a time that works for everyone? Everyone does the challenge whenever they can.", note: "this way" }
};

var COUV22 = { type: "couverture", pills: ["Behind the scenes", "Anna & Cyprien"], titre: "Tokyo and Québec City: how we started giving each other one challenge a day", bulle: "<b>13 hours</b> of time difference", fleche: "our story" };

var POSTS = {
  "19": {
    photo: "assets/p1_cookies.jpg", crop: "19% 4.3% 11.8% 4.2%", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "Baking"], titre: "Bake your person's childhood dessert, each in your own kitchen", bulle: "<b>babe</b> just pulled the tray out of the oven", fleche: "no recipe allowed" },
      { type: "texte", titre: "How to play", texte: "Ask them for the name of their childhood dessert. Just the name. You figure out the recipe, bake it, and take the photo before it's gone." },
      { type: "texte", titre: "No copying", texte: "On UNEAR, you only see their photo once you've posted yours, so nobody can copy the plating." },
      { type: "texte", titre: "Example", texte: "Léa in Lyon tries Sam's pouding chômeur, a Québec cake baked in maple syrup. Sam in Montréal burns the first batch of crêpes and posts it anyway." },
      { type: "texte", titre: "On tonight's call", texte: "You've got plenty to talk about: who nailed it, and the memory that goes with that dessert." }
    ]
  },
  "20": {
    photo: "assets/p2_ombre.jpg", pos: "center 60%", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Live it all", "6h time difference"], titre: "The 5 stages of \"good night\" when you're 6 hours apart", bulle: "<b>babe</b>: good night 🌙 (it's 11pm here)", fleche: "so us" },
      { type: "etape", numero: "1", texte: "5pm in Québec City. You get \"good night 🌙\". Your day is far from over." },
      { type: "etape", numero: "2", texte: "You send back \"sleep well\" between two things and get on with your evening." },
      { type: "etape", numero: "3", texte: "Midnight for you. You leave a voice note for when they wake up. Over there it's 6am and they're still asleep." },
      { type: "etape", numero: "4", texte: "They wake up to your voice note, your evening in photos and today's challenge already posted." },
      { type: "etape", numero: "5", texte: "You both had a full day, and you still got your good night and your good morning." }
    ]
  },
  "21": {
    photo: "assets/p3_verriere.jpg", pos: "center 30%", cta: "amis",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "Weekly list"], titre: "5 challenges to do with your friends next week, even oceans apart", bulle: "<b>bestie</b>: which one first?", fleche: "save this" },
      { type: "etape", numero: "1", texte: "Make them guess your neighborhood in 3 photos. No landmarks allowed." },
      { type: "etape", numero: "2", texte: "Send 10 seconds of the sound of your street. The group guesses what's going on." },
      { type: "etape", numero: "3", texte: "Post your dinner. The group votes for the best-looking plate." },
      { type: "etape", numero: "4", texte: "Learn one word in the language of the country you live in, and slip it into the chat all day." },
      { type: "etape", numero: "5", texte: "Find something in your city that reminds you of someone in the group, and snap it." }
    ]
  },
  "22A": {
    photo: "assets/p7_aeroport.jpg", pos: "center 20%", cta: "couples",
    slides: [
      COUV22,
      { type: "texte", texte: "June 2025: we're a couple, one of us in Tokyo, the other in Québec City. The only time we shared was when one was waking up and the other was going to bed." },
      { type: "texte", texte: "We could have spent our nights on calls. We also wanted to sleep well and make the most of our two cities." },
      { type: "texte", texte: "So we started a game: one challenge a day, to do in real life. A shared quest, like in a video game, each in our own world." },
      { type: "texte", texte: "Friends living far from their people asked for our ideas. They were tired of WhatsApp: too many other chats, and nothing that gives you new things to talk about. So we built UNEAR." },
      { type: "texte", texte: "Today it's Paris and Québec City. The daily challenge is still here, on top of our calls." }
    ]
  },
  "22B": {
    photo: "assets/p7_aeroport.jpg", pos: "center 20%", cta: "couples",
    slides: [
      COUV22,
      { type: "texte", texte: "Our favorite game as a couple between Tokyo and Québec City: one challenge a day, each in our own city." },
      { type: "texte", texte: "Little real-life quests, like in a video game. Whoever woke up found the other's photo waiting." },
      { type: "texte", texte: "Our long-distance friends wanted our ideas. They were tired of WhatsApp, where everything gets lost between other chats." },
      { type: "texte", texte: "So we built UNEAR. Today it's Paris and Québec City, and we still play." }
    ]
  },
  "23": {
    photo: "assets/app_mockup.png", cta: "amis",
    slides: [
      { type: "app", pills: ["UNEAR in action"], titre: "One challenge a day. You see theirs after you post yours.", fleche: "how it works" },
      { type: "etape", numero: "1", texte: "Create your group: your partner, your family or your friends." },
      { type: "etape", numero: "2", texte: "Pick a category: distance dating, nostalgia, movie week, photography, fitness..." },
      { type: "etape", numero: "3", texte: "Every day, a new challenge to do in real life, whenever it suits you." },
      { type: "etape", numero: "4", texte: "Post your photo. Everyone else's unlocks right then." },
      { type: "etape", numero: "5", texte: "Talk about it in the group chat, then on your next call. UNEAR comes on top of your calls." }
    ]
  },
  "24": {
    photo: "assets/p6_frigo.jpg", pos: "center 25%", cta: "amis",
    slides: [
      { type: "couverture", pills: ["Live it all", "Expat life"], titre: "Nobody warns you that your fridge abroad will become a conversation topic", bulle: "<b>bestie</b>: why is your yogurt purple??", fleche: "true story" },
      { type: "texte", texte: "You spend 20 minutes in the yogurt aisle without recognizing a single brand." },
      { type: "texte", texte: "You send a photo of the shelf, \"which one?\", like they're standing right next to you." },
      { type: "texte", texte: "You try some unlikely local snack and film your face on the first bite." },
      { type: "texte", texte: "The day you find THE product from back home, you show it off like a trophy." },
      { type: "texte", titre: "Today's challenge", texte: "Take a photo of your fridge, door open, no tidying up. They have to guess which country you live in." }
    ]
  },
  "25": {
    photo: "assets/p5_cafe.jpg", pos: "center 40%", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "Photo dump"], titre: "Send your week in 5 photos, with zero explanation", bulle: "<b>babe</b>: why a pancake AND a notebook??", fleche: "explained on the call" },
      { type: "texte", titre: "The rule", texte: "5 photos from your week. No captions, no context." },
      { type: "texte", titre: "The game", texte: "They tell the story of your week for you, using only the photos. You correct them on the call." },
      { type: "texte", titre: "Why we love it", texte: "The little moments you forget to mention on the phone finally make it through." },
      { type: "texte", titre: "Bonus", texte: "Do it every week. In a month, you'll have an album of your two lives." }
    ]
  }
};
