const React = require("react");
//const CompLibrary = require("../../core/CompLibrary.js");
//const Container = CompLibrary.Container;

//const translate = require("../../server/translate.js").translate;

const users = [
    {
      caption: "Facebook",
      image: "img/logos/facebook.svg",
      infoLink: "https://www.facebook.com",
    },
    {
      caption: "Messenger",
      image: "img/logos/messenger.svg",
      infoLink: "https://messenger.com",
    },
    {
      caption: "WOW air",
      image: "img/logos/wowair.svg",
      infoLink: "https://wowair.com",
    },
    {
      caption: "Viska",
      image: "img/logos/viska.png",
      infoLink: "https://www.viska.com",
    },
    {
      caption: "BeOpinion",
      image: "img/logos/beopinion.svg",
      infoLink: "https://beopinion.com",
    },
    {
      caption: "Mesopo",
      image: "img/logos/mesopo.svg",
      infoLink: "https://mesopo.ai",
    },
    {
      caption: "Social Tables",
      image: "img/logos/socialtables.svg",
      infoLink: "https://www.socialtables.com",
    },
    {
      caption: "Broadsheet",
      image: "img/logos/broadsheet.svg",
      infoLink: "https://www.broadsheet.com.au",
    },
    {
      caption: "Toughbyte",
      image: "img/logos/toughbyte.svg",
      infoLink: "http://www.toughbyte.com",
    },
    {
      caption: "g2i.co",
      image: "img/logos/g2i.png",
      infoLink: "http://g2i.co",
    },
    {
      caption: "ephox",
      image: "img/logos/ephox.svg",
      infoLink: "https://www.ephox.com",
    },
    {
      caption: "Rung",
      image: "img/logos/rung.svg",
      infoLink: "https://rung.com.br/"
    },
    {
      caption: "Astrocoders",
      image: "img/logos/astrocoders.svg",
      infoLink: "https://astrocoders.com",
    },
    {
      caption: "Ahrefs",
      image: "img/logos/ahrefs.svg",
      infoLink: "https://ahrefs.com",
    },
    {
      caption: "Root",
      image: "img/logos/root.svg",
      infoLink: "https://root.co.za",
    },
    {
      caption: "Dernier Cri",
      image: "img/logos/derniercri.svg",
      infoLink: "https://derniercri.io",
    },
    {
      caption: "Backtrace",
      image: "img/logos/backtrace.svg",
      infoLink: "https://backtrace.io",
    },
    {
      caption: "Mobilunity",
      image: "img/logos/mobilunity.svg",
      infoLink: "https://mobilunity.com",
    },
    {
      caption: "Appier",
      image: "img/logos/appier.svg",
      infoLink: "https://appier.com",
    },
    {
      caption: "InVision",
      image: "img/logos/invision.svg",
      infoLink: "https://www.invision.de",
    },
  ];

class Users extends React.Component {
  render() {
    const showcase = users.map(user => {
      return (
        <a href={user.infoLink} key={user.infoLink}>
          <img
            src={`${siteConfig.baseUrl}${user.image}`}
            title={user.caption}
          />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container>
          <div className="showcaseSection">
            <div className="prose">
              <h1>
                <translate>Users of Reason</translate>
              </h1>
              <p>
                <translate>Here are some of the folks successfully using Reason and BuckleScript in production, today!</translate>
              </p>
            <a href="https://github.com/reasonml/reasonml.github.io/blob/source/website/siteConfig.js" className="button addCompanyButton">
              <translate>Add yours (SVG logo preferred)</translate>
            </a>
            </div>
            <div className="logos">
              {showcase}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;