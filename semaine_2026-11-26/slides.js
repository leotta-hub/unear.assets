// Slide texts copied word for word from textes.md. The CTA is added automatically as the last slide.
// Posts 28, 01 and 02 have no photo yet: assets/photo_a_fournir.png is a plain placeholder, to replace with the real photo.
var CTA = {
  couples: { titre: "Different time zones, no time to call? Post your side of the challenge. They'll see it when they wake up.", note: "this way" },
  amis: { titre: "Can't find a time that works for everyone? Everyone does the challenge whenever they can.", note: "this way" }
};

var POSTS = {
  "26": {
    photo: "assets/p1_latte.jpg", pos: "center 40%", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "Thanksgiving"], titre: "Send a photo of one thing you're grateful for today. No caption.", bulle: "<b>babe</b>: ok why is it a coffee 😂", fleche: "they guess why" },
      { type: "texte", titre: "The rule", texte: "One photo of something that made your day better. No caption, no hint." },
      { type: "texte", titre: "The game", texte: "They guess why you picked it. Three tries, then you tell them." },
      { type: "texte", titre: "Why it works", texte: "You get a glimpse of their day, and it can be the smallest thing, like a good coffee or a text from their mom." },
      { type: "texte", titre: "Bonus", texte: "Make it a weekly thing. In a month you'll have a little album of good days." }
    ]
  },
  "27": {
    photo: "assets/p2_telephone.jpg", pos: "center 50%", cta: "amis",
    slides: [
      { type: "couverture", pills: ["Live it all", "Camera roll"], titre: "Things you photograph for your person without even thinking", bulle: "<b>bestie</b>: you sent me 14 photos of a dog??", fleche: "guilty" },
      { type: "etape", numero: "1", texte: "Your plate, before anyone's allowed to touch it." },
      { type: "etape", numero: "2", texte: "A shop sign with a typo that made you laugh out loud." },
      { type: "etape", numero: "3", texte: "The sky, because it's doing that pink thing again." },
      { type: "etape", numero: "4", texte: "A dog you met on the street. You don't know its name. You love it." },
      { type: "etape", numero: "5", texte: "Two outfits in the fitting room mirror, with \"which one??\"" }
    ]
  },
  "28": {
    photo: "assets/photo_a_fournir.png", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "December list"], titre: "5 challenges to do as a couple this December, from two different cities", bulle: "<b>babe</b>: starting Tuesday?", fleche: "save this" },
      { type: "etape", numero: "1", texte: "Find the weirdest Christmas decoration in your neighborhood. Best photo wins." },
      { type: "etape", numero: "2", texte: "Buy them a tiny gift that costs less than a coffee. Keep it for your next reunion." },
      { type: "etape", numero: "3", texte: "Write them a note by hand, take a photo, and keep the paper for the day you see them." },
      { type: "etape", numero: "4", texte: "Photograph the view from your window every morning for 7 days, then put both weeks side by side." },
      { type: "etape", numero: "5", texte: "Try a December treat from your city that they've never tasted, and describe it in 3 words." }
    ]
  },
  "29": {
    photo: "assets/p4_brunch.png", pos: "center 50%", cta: "amis",
    slides: [
      { type: "couverture", pills: ["Behind the scenes", "Anna & Cyprien"], titre: "Quick answers about UNEAR, from the two people who built it", bulle: "<b>Paris</b> and <b>Québec City</b>", fleche: "the basics" },
      { type: "texte", titre: "Does it replace calls?", texte: "No. UNEAR comes on top of your calls. It gives you something new to talk about when you do call." },
      { type: "texte", titre: "Can I see their photo first?", texte: "No. You see theirs once you've posted yours. Nobody copies, and the surprise lasts." },
      { type: "texte", titre: "Is it only for couples?", texte: "No. You can make a group with your partner, your family or your friends." },
      { type: "texte", titre: "Where are you?", texte: "Paris and Québec City, 6 hours apart. So yes, we use it too." }
    ]
  },
  "30": {
    photo: "assets/app_mockup.png", cta: "couples",
    slides: [
      { type: "app", pills: ["UNEAR in action"], titre: "What's inside a category? A look at Distance Dating.", fleche: "take a peek" },
      { type: "etape", numero: "1", texte: "Distance Dating's motto: \"Cook, draw, play and create together.\"" },
      { type: "etape", numero: "2", texte: "Today's challenge sits at the top. You do it in real life, each in your own city." },
      { type: "etape", numero: "3", texte: "The next challenges stay hidden. You find out what's coming as you go." },
      { type: "etape", numero: "4", texte: "Post your photo, and theirs unlocks." },
      { type: "etape", numero: "5", texte: "Then you talk about it in the chat, and on your next call." }
    ]
  },
  "01": {
    photo: "assets/photo_a_fournir.png", cta: "amis",
    slides: [
      { type: "couverture", pills: ["Live it all", "December"], titre: "Signs you live abroad and it's officially December", bulle: "<b>mom</b>: so when are you landing?", fleche: "so me" },
      { type: "texte", texte: "You've checked flight prices more times than you've checked the weather." },
      { type: "texte", texte: "You send 30 photos of your city's decorations to the group chat back home." },
      { type: "texte", texte: "You explain your country's holiday traditions to new friends, and they explain theirs." },
      { type: "texte", texte: "You end up celebrating twice: once with your new friends, once on a video call with home." }
    ]
  },
  "02": {
    photo: "assets/photo_a_fournir.png", cta: "couples",
    slides: [
      { type: "couverture", pills: ["Today's challenge", "City hunt"], titre: "Find your person's initial hidden somewhere in your city", bulle: "<b>babe</b>: is that a C on a bakery sign?", fleche: "harder than it looks" },
      { type: "texte", titre: "The rule", texte: "Find the first letter of their name out in the street. Signs, menus, graffiti, a bike rack bent the right way." },
      { type: "texte", titre: "No cheating", texte: "No writing it yourself, no keyboard, no screens." },
      { type: "texte", titre: "The game", texte: "They post theirs too, and you vote for the most creative find." },
      { type: "texte", titre: "Bonus", texte: "Keep going all week and spell out your names, one letter a day." }
    ]
  }
};
