function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 인증토큰이 없으면 로그인페이지로 튕김
(()=>{
  const token = getCookie("token");
  if(!token) { // 토큰이 없으면 페이지 이동시킴(window.location 객체)
    window.location.href = "/login.html";
  }
})()