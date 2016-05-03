import React from 'react';
import ResourceMessage from '../containers/ResourceMessage';

const Results = ({ isVisible, currentResults = 0 }) => {
  const messageData = getMessageData(currentResults);
  const classes = ['mm-assessment__results'];
  console.log('isVisible', isVisible);
  !isVisible && classes.push('mm-assessment__results--hidden');

  return (
    <section className={classes.join(' ')}>
      <h2 className="mm-assessment__heading">
        <strong className="mm-assessment__grade">{currentResults}/10</strong>
        {" — " + messageData.heading}
      </h2>
      <h3 className="mm-assessment__sub-heading">{messageData.subheading}</h3>
      <figure className="mm-assessment__image-wrap">
        <img src={messageData.image.src} alt={messageData.image.alt} className="mm-assessment__image" />
        <figcaption className="mm-assessment__image-caption">
          {messageData.image.caption || messageData.image.alt}
          {messageData.image.credit && (
            <span className="mm-assessment__image-credit">
              <CreditLink
                credit={messageData.image.credit}
                creditLink={messageData.image.creditLink} 
              />
            </span>
          )}
        </figcaption>
      </figure>
      <div class="mm-assessment__description">
        {messageData.message}
        <p>
          Enter your name and email below to get a customized report delivered
          directly to your inbox that breaks down simple fixes for your site
          that can make a big difference to your site's visitors — and to your
          conversion rate.
        </p>
      </div>
      <form className="mm-assessment__form" action="./" method="post">
        <div className="mm-assessment__input-group">
          <label className="mm-assessment__label" htmlFor="fname">
            First Name
          </label>
          <input className="mm-assessment__input mm-assessment__input--text"
                 type="text"
                 name="fname"
                 id="fname"
          />
        </div>
        <div className="mm-assessment__input-group">
          <label className="mm-assessment__label" htmlFor="email">
            Email Address
          </label>
          <input className="mm-assessment__input mm-assessment__input--email"
                 type="email"
                 name="email"
                 id="email"
          />
        </div>
        <input className="mm-assessment__button"
               type="submit"
               value="Send My Report"
        />
        <ResourceMessage />
      </form>
    </section>
  );
};

const CreditLink = ({ credit, creditLink }) => {
  let imageCredit = (
    <span className="mm-assessment__credit">
      {credit}
    </span>
  );

  if (creditLink) {
    imageCredit = (
      <a className="mm-assessment__credit mm-assessment__credit--link" 
         href={creditLink}>
        {credit}
      </a>
    );
  }

  return (
    <small className="mm-assessment__image-credit">
      {"Credit: "}
      {imageCredit}
    </small>
  );
};

const getMessageData = (score) => {
  if (score === 10) {
    return {
      heading: 'Perfect!',
      subheading: 'You’re doing great! But there’s still room to improve.',
      image: {
        src: 'https://media.giphy.com/media/Bcwj50g9ZCnh6/giphy.gif',
        alt: 'The trolls from Frozen.',
      },
      message: (
        <div>
          <p>
            Well, look at you go! You’re kicking ass — don’t change a thing.
          </p>
          <p>
            But just in case you’d like to brush up on all the ways you’re 
            doing things right, I’ve put together a refresher course for you.
          </p>
        </div>
      ),
    };
  }

  if (score >= 8 && score < 10) {
    return {
      heading: 'Good',
      subheading: 'You’re doing great! But there’s still room to improve.',
      image: {
        src: 'https://media.giphy.com/media/l2JJswqygQROMnq5q/giphy.gif',
        alt: 'Pretty good!',
        credit: 'Saturday Night Live',
        creditLink: 'http://www.nbc.com/saturday-night-live',
      },
      message: (
        <div>
          <p>
            Message about a good-not-great website.
          </p>
          <p>
            But don’t worry: fixing the issues with your site may not be as 
            hard as you think.
          </p>
        </div>
      ),
    };
  }

  if (score >= 6 && score < 8) {
    return {
      heading: 'Fair',
      subheading: 'Not bad. Needs work.',
      image: {
        src: 'https://media.giphy.com/media/1VFmKgKuufq5W/giphy.gif',
        alt: 'Fur sure.',
        credit: 'Workaholics',
        creditLink: 'http://www.cc.com/shows/workaholics',
      },
      message: (
        <div>
          <p>
            Message about an okay website.
          </p>
          <p>
            But don’t worry: fixing the issues with your site may not be as 
            hard as you think.
          </p>
        </div>
      ),
    };
  }

  if (score < 6) {
    return {
      heading: 'Your site’s a bit of fixer-upper.',
      subheading: 'But we can fix this fixer-upper up with a little bit of love!',
      image: {
        src: 'https://media.giphy.com/media/Bcwj50g9ZCnh6/giphy.gif',
        alt: 'Your website just needs warm hugs!',
        credit: 'Frozen',
        creditLink: 'http://frozen.disney.com/',
      },
      message: (
        <div>
          <p>
            Okay, I’m not going to sugar-coat it: your site needs work. 
            There’s  a good chance your site visitors are frustrated, 
            confused, and closing your site before they ever learn how you 
            can help them. ¡No bueno!
          </p>
          <p>
            But don’t worry: fixing the issues with your site may not be as 
            hard as you think.
          </p>
        </div>
      ),
    };
  }
}

export default Results;
