
var one01=document.querySelector('.one01');
var one02=document.querySelector('.one02');
var one03=document.querySelector('.one03');
var say01=document.querySelector('.say01');
var say02=document.querySelector('.say02');
var say03=document.querySelector('.say03');

var one04=document.querySelector('.one04');
var one05=document.querySelector('.one05');
var one06=document.querySelector('.one06');
var say04=document.querySelector('.sa04');
var say05=document.querySelector('.say05');
var say06=document.querySelector('.say06');

var play=document.querySelector('.play');
var play2=document.querySelector('.play2');

one01.onclick=function() {
	say01.classList.toggle('plus');
}
one02.onclick=function() {
	say02.classList.toggle('plus');
}
one03.onclick=function() {
	say03.classList.toggle('plus');
}
one04.onclick=function() {
	say04.classList.toggle('plus');
}
one05.onclick=function() {
	say05.classList.toggle('plus');
}
one06.onclick=function() {
	say06.classList.toggle('plus');
}

play.onclick=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bTg9K9/btrajPWJBZR/Steq5AFkpsPM2T5Fa1rCdk/img.png)';
	this.style.animationIterationCount= 1;
	gsap.to(".say01", {
		opacity:1,
		duration: 0.4, 
	});
	gsap.to(".say02", {
		opacity:1,
		delay:0.3,
		duration: 0.4, 
	});
	gsap.to(".say03", {
		opacity:1,
		delay:0.6,
		duration: 0.4, 
	});
}
play2.onclick=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bTg9K9/btrajPWJBZR/Steq5AFkpsPM2T5Fa1rCdk/img.png)';
	this.style.animationIterationCount= 1;
	gsap.to(".sa04", {
		opacity:1,
		duration: 0.4, 
	});
	gsap.to(".say05", {
		opacity:1,
		delay:0.3,
		duration: 0.4, 
	});
	gsap.to(".say06", {
		opacity:1,
		delay:0.6,
		duration: 0.4, 
	});
}
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

  });
var swiper2 = new Swiper(".mySwiper2", {
	loop: true,
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
});

var myL01=document.querySelector('.myL01>div:first-child');
myL01.onmouseover=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bj7ISB/btraoDosQfn/olkxvu6lJibRA8dlYWGWKk/img.jpg)';
}
myL01.onmouseout=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/xIiVw/btranW9GsUE/j6eT08ZeMuVBrNLwGqGGe1/img.jpg)';
}
var myL02=document.querySelector('.myL02>div:first-child');
myL02.onmouseover=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/NhWHh/btranygUkcb/DFA7mWhJDcnFOZLDIy6AX0/img.jpg)';
}
myL02.onmouseout=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bvh9lb/btraoBRHXe3/YIKDZwkZzFFWpQncKRe8zK/img.jpg)';
}
var myL03=document.querySelector('.myL03>div:first-child');
myL03.onmouseover=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bm1fwz/btraoDvdTvL/8maGq9zR8cGj14fOLWKRu1/img.jpg)';
}
myL03.onmouseout=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bqeWY0/btrax63tvQu/186ysHGFqmavlDaLXNOy01/img.jpg)';
}
var myL04=document.querySelector('.myL04>div:first-child');
myL04.onmouseover=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/bFluaa/btraqRsJgRk/Uxii57q2KFsC3VkJeZu3RK/img.jpg)';
}
myL04.onmouseout=function() {
	this.style.backgroundImage='url(https://blog.kakaocdn.net/dn/eHuem0/btranV3YYZP/JrKNuQkdKelXfL2gwnhmK0/img.jpg)';
}

var bar=document.querySelector('.fa-bars');
var menu=document.querySelector('.menu');
var no=document.querySelector('.no');
var x=document.querySelector('.x');
bar.onclick=function() {
	menu.style.left='0px';
	no.style.display='none';
}
x.onclick=function() {
	menu.style.left='-2000px';
	no.style.display='block';
}

var btn=document.querySelector('.btn');
var popup=document.querySelector('.popup');
var x2=document.querySelector('.x2');
btn.onclick=function() {
	popup.style.display='block';
}
x2.onclick=function() {
	popup.style.display='none';
}