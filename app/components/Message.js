import React from 'react';
import {buildJSXFromArray, splitByLineBreaks} from '../utils';

const Message = ({ message, good = [], okay = [], bad = [] }) => {
  const markup = [
    `<p>${splitByLineBreaks(message.top).join('</p><p>')}</p>`,
    buildLinkMarkup(
      buildLinks(bad),
      message.badHeading
    ),
    buildLinkMarkup(
      buildLinks(okay),
      message.okayHeading
    ),
    buildLinkMarkup(
      buildLinks(good),
      message.goodHeading
    ),
    `<p>${splitByLineBreaks(message.bottom).join('</p><p>')}</p>`,
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
    if (!resource.url || !resource.title) {
      return '';
    }

    return `<li><a href="${resource.url}">"${resource.title}"</a></li>`;
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
