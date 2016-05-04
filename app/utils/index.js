import React from 'react';

export function getDataFromApi(endpoint) {
  return new Promise((resolve, reject) => {
    const client = new XMLHttpRequest();

    client.open('GET', endpoint);
    client.send();

    client.onload = function handleAjaxLoad() {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this.statusText);
      }
    };

    client.onerror = function handleAjaxError() {
      reject(this.statusText);
    };
  });
}

export function buildJSXFromArray(strArray) {
  return strArray.map(str => (<p key={btoa(escape(str))}>{str}</p>));
};

export function splitByLineBreaks(str) {
  return str.split("\r\n\r\n");
};
