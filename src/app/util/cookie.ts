export function getCookie(name: any) {
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].split('=');
    if (name == c[0].trim()) {
      return decodeURIComponent(c[1]);
    }
  }
  return null;
}

export function setCookie(name: any, value: any, days: any) {
  var cookie = name + '=' + encodeURIComponent(value);
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = cookie + expires + '; path=/';
}

export function deleteCookie(name: any) {
  document.cookie =
    name + '=' + 'path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
