$(document).ready(function(){var s=$("#startchange"),o=s.offset();s.length&&$(document).scroll(function(){$(this).scrollTop()>o.top?$(".navbar").css("background-color","#161616"):$(".navbar").css("background-color","transparent")}),$("a").on("click",function(s){if(""!==this.hash){s.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,function(){window.location.hash=o})}}),$(".main-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".sync-slider"}),$(".sync-slider").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".main-slider",dots:!1,centerMode:!1,focusOnSelect:!0,infinite:!0}),$(".reviews__slider").slick({mobileFirst:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".gallery-slider").slick({slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!0,prevArrow:"<a class='prevButton pull-left'><i class=\"fas fa-chevron-left\"></i></a>",nextArrow:"<a class='nextButton pull-right'><i class=\"fas fa-chevron-right\"></a>",mobileFirst:!0,responsive:[{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1}}]})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzdGFydGNoYW5nZSIsIm9mZnNldCIsImxlbmd0aCIsInNjcm9sbCIsInRoaXMiLCJzY3JvbGxUb3AiLCJ0b3AiLCJjc3MiLCJvbiIsImV2ZW50IiwiaGFzaCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImZhZGUiLCJhc05hdkZvciIsImRvdHMiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwibW9iaWxlRmlyc3QiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicHJldkFycm93IiwibmV4dEFycm93Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUVkLElBQ0lDLEVBQWNILEVBQUUsZ0JBQ2hCSSxFQUFTRCxFQUFZQyxTQUNyQkQsRUFBWUUsUUFDWkwsRUFBRUMsVUFBVUssT0FBTyxXQUNBTixFQUFFTyxNQUFNQyxZQUNKSixFQUFPSyxJQUN0QlQsRUFBRSxXQUFXVSxJQUFJLG1CQUFvQixXQUVyQ1YsRUFBRSxXQUFXVSxJQUFJLG1CQUFvQixpQkFLakRWLEVBQUUsS0FBS1csR0FBRyxRQUFTLFNBQVNDLEdBRXhCLEdBQWtCLEtBQWRMLEtBQUtNLEtBQWEsQ0FDbEJELEVBQU1FLGlCQUVOLElBQUlELEVBQU9OLEtBQUtNLEtBRWhCYixFQUFFLGNBQWNlLFFBQVEsQ0FDcEJQLFVBQVdSLEVBQUVhLEdBQU1ULFNBQVNLLEtBQzdCLElBQUssV0FDSk8sT0FBT0MsU0FBU0osS0FBT0EsT0FNbkNiLEVBQUUsZ0JBQWdCa0IsTUFBTSxDQUNwQkMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLFNBQVUsaUJBSWR2QixFQUFFLGdCQUFnQmtCLE1BQU0sQ0FDcEJDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJHLFNBQVUsZUFDVkMsTUFBTSxFQUNOQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsVUFBVSxJQUlkM0IsRUFBRSxvQkFBb0JrQixNQUFNLENBQ3hCVSxhQUFZLEVBQ1pELFVBQVUsRUFDVlIsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkksTUFBTSxFQUNOSCxRQUFRLEVBQ1JRLFdBQVksQ0FDUixDQUNJQyxXQUFZLElBQ1pDLFNBQVUsQ0FDTlosYUFBYyxFQUNkQyxlQUFnQixJQUd4QixDQUNJVSxXQUFZLElBQ1pDLFNBQVUsQ0FDTlosYUFBYyxFQUNkQyxlQUFnQixPQU1oQ3BCLEVBQUUsbUJBQW1Ca0IsTUFBTSxDQUN2QkMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkksTUFBTSxFQUNORyxVQUFVLEVBQ1ZLLFVBQVUsRUFDVkMsY0FBZSxJQUNmWixRQUFRLEVBQ1JhLFVBQVcsNEVBQ1hDLFVBQVcsMEVBQ1hQLGFBQWEsRUFDYkMsV0FBWSxDQUNSLENBQ0lDLFdBQVksSUFDWkMsU0FBVSxDQUNOWixhQUFjLEVBQ2RDLGVBQWdCLElBR3hCLENBQ0lVLFdBQVksSUFDWkMsU0FBVSxDQUNOWixhQUFjLEVBQ2RDLGVBQWdCLElBR3hCLENBQ0lVLFdBQVksSUFDWkMsU0FBVSxDQUNOWixhQUFjLEVBQ2RDLGVBQWdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNjcm9sbF9zdGFydCA9IDA7XHJcbiAgICB2YXIgc3RhcnRjaGFuZ2UgPSAkKCcjc3RhcnRjaGFuZ2UnKTtcclxuICAgIHZhciBvZmZzZXQgPSBzdGFydGNoYW5nZS5vZmZzZXQoKTtcclxuICAgIGlmIChzdGFydGNoYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzY3JvbGxfc3RhcnQgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsX3N0YXJ0ID4gb2Zmc2V0LnRvcCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5uYXZiYXJcIikuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyMxNjE2MTYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICB9LCA4MDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcubWFpbi1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhc05hdkZvcjogJy5zeW5jLXNsaWRlcidcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuc3luYy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLm1haW4tc2xpZGVyJyxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLnJldmlld3NfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBtb2JpbGVGaXJzdDp0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmdhbGxlcnktc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBwcmV2QXJyb3c6IFwiPGEgY2xhc3M9J3ByZXZCdXR0b24gcHVsbC1sZWZ0Jz48aSBjbGFzcz1cXFwiZmFzIGZhLWNoZXZyb24tbGVmdFxcXCI+PC9pPjwvYT5cIixcclxuICAgICAgICBuZXh0QXJyb3c6IFwiPGEgY2xhc3M9J25leHRCdXR0b24gcHVsbC1yaWdodCc+PGkgY2xhc3M9XFxcImZhcyBmYS1jaGV2cm9uLXJpZ2h0XFxcIj48L2E+XCIsXHJcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIl19
