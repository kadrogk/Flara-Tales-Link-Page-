//Flickity carousel settings
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  autoPlay: 1500,
  wrapAround: true
});



//Pictures for the carousel
var pictures = [
  { source: "../media/images/header_carousel/instagram_froggie_light.png", alt: "Light Froggie" },
  { source: "../media/images/header_carousel/instagram_hedgehog_light.png", alt: "Light Hedgehog" },
  { source: "..//media/images/header_carousel/instagram_kitty_coffee_red.png", alt: "Spilled Coffee Red Kitty" },
  { source: "../media/images/header_carousel/instagram_rounds.png", alt: "Small round" },
  { source: "../media/images/header_carousel/instagram_skull_hippo.png", alt: "Hippo Skull" },
  { source: "../media/images/header_carousel/instagram_fox_black.png", alt: "Sleeping Black Fox" },
  { source: "../media/images/header_carousel/instagram_kitty_yell_cream.png", alt: "Hungry Kitty" },
];


//Generating photos in the carousel:
function pictureDivsGenerator() {
  return pictures.map((picture) => {
    var pictureDiv = document.createElement('div');
    pictureDiv.className = "carousel-cell";
    pictureDiv.innerHTML = `<img src=${picture.source} class="carousel-cell-image" alt="${picture.alt} enamel pin"></img>`;
    flkty.append(pictureDiv);
  });
};

pictureDivsGenerator();



//Generating buttons with links:
var links = [
  { icon_source: "../media/images/links_icons/shop_icon.png", icon_alt: "Shop", button_text: "Shop!", href: "https://www.etsy.com/shop/FlaraTales/" },
  { icon_source: "../media/images/links_icons/kickstarter_icon.png", icon_alt: "Kickstarter", button_text: "Kickstarter", href: "https://www.kickstarter.com/projects/flarestuff/spooky-autumn-vibes-witchy-and-pumpkin-spicy-collection" },
  { icon_source: "../media/images/links_icons/tiktok_icon.png", icon_alt: "Tik Tok", button_text: "Tik Tok", href: "https://www.tiktok.com/@flaratales" },
  { icon_source: "../media/images/links_icons/instagram_icon.png", icon_alt: "Instagram", button_text: "Instagram", href: "https://www.instagram.com/flaratales/" },
  { icon_source: "../media/images/links_icons/twitter_icon.png", icon_alt: "Twitter", button_text: "Twitter", href: "https://twitter.com/FlaraTales" },
  { icon_source: "../media/images/links_icons/facebook_icon.png", icon_alt: "Facebook", button_text: "Facebook", href: "https://www.facebook.com/FlaraTales" },
];


function LinksGenerator() {
  links.forEach((link) => {
    var linkButton = document.createElement('div');
    linkButton.classList = "links_button_list";
    linkButton.innerHTML = `<a href=${link.href}><label>${link.button_text}</label></a>`
    document.getElementById('links_set').appendChild(linkButton);
    var linkButtonIcon = document.createElement('img');
    linkButtonIcon.classList = "";
    linkButtonIcon.src = link.icon_source;
    linkButtonIcon.alt = link.icon_alt;
    linkButton.appendChild(linkButtonIcon);
  });
}

LinksGenerator();