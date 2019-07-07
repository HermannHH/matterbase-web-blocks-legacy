function getCookie(name) {
  const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return v ? v[2] : null;
}

function setCookie(cname, cvalue, exMins) {
  var d = new Date();
  d.setTime(d.getTime() + (exMins*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  setCookie(name, "", 0);
}

function readCookieFromString(name, cookiesString) {
  // Escape regexp special characters (thanks kangax!)
  name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');

  var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)','i'),
      match = cookiesString.match(regex);

  return match && unescape(match[1]); // thanks James!
}

export { getCookie, setCookie, deleteCookie, readCookieFromString };
