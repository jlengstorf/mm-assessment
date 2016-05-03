import React from 'react';

const Message = ({ good = [], okay = [], bad = [] }) => {
  const goodLinks = buildLinks(good);
  const okayLinks = buildLinks(okay);
  const badLinks = buildLinks(bad);

  const message ={
    top: [
      'Hey, *|FNAME|*–',
      'This is an overview of what this report details.',
      'You can read it first, or start clicking links like a pyschopath.',
    ],
    bottom: [
      'If you have any questions, just reply to this message. I\'d love to hear from you.',
      'Talk soon,<br>Marisa Morby',
    ],
  };

  const markup = [
    `<p>${message.top.join('<br><br>')}</p>`,
    buildLinkMarkup(
      buildLinks(bad),
      'Critical Fixes: These issues are frustrating people and costing you business:'
    ),
    buildLinkMarkup(
      buildLinks(okay),
      'Should Fix: These updates will improve people\'s experience on your site.'
    ),
    buildLinkMarkup(
      buildLinks(good),
      'For Review: These are the things your site is already doing right.'
    ),
    `<p>${message.bottom.join('<br><br>')}</p>`,
  ].join('');

  const encodedMarkup = utf8_to_b64(markup);

  return (
    <input type="hidden" name="rmsg" value={encodedMarkup} />
  );
};

const utf8_to_b64 = (str) => {
  return window.btoa(escape(encodeURIComponent(str)));
}

const buildLinks = (links) => {
  return links.toArray().map(({resource}) => {
    return `<li><a href="${resource.link}">"${resource.name}"</a></li>`;
  });
}

const buildLinkMarkup = (links, message) => {
  let markup = [];
  if (links.length > 0) {
    markup = [
      `<p><strong>${message}</strong></p>`,
      `<ul>${links.join('')}</ul>`,
    ];
  }

  return markup.join('');
};

export default Message;
