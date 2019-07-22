window.addEventListener("load",function(){var e=new XMLHttpRequest,t=document.getElementById("albumListe");e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){for(var a=1;a<9;a++)t.innerHTML+=`<li class="list-group-item albumid" data-album-id="${a}"> \n                                          <a href="#"><i class="fas fa-chevron-right"></i>  Album ${a}</a>\n                                        </li>`;var n=document.querySelectorAll(".list-group-item.albumid");Array.from(n).forEach(function(e){var t=e.dataset.albumId;e.addEventListener("click",function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){var a=document.querySelector("#cardDiv");if(4==e.readyState&&200==e.status){var n=JSON.parse(e.responseText);n=n.filter(function(e){return e.albumId===parseInt(t)}),a.innerHTML="";for(var l=0;l<8;l++)a.innerHTML+=`<div class="col-lg-3 col-6 album-thumb" data-full-url="${n[l].url}">\n                                                    <img id="thumbnails" src="${n[l].thumbnailUrl}">\n                                                    <p>${n[l].title}</p>\n                                                  </div>`;var r=document.querySelectorAll(".album-thumb");Array.from(r).forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.fullUrl,a=document.getElementsByClassName("closebtn"),n=document.getElementById("bigImage");n?(n.setAttribute("src",t),n.parentElement.style.display="block"):a.style.display="none"})})}},e.open("GET",`https://jsonplaceholder.typicode.com/albums/${t}/photos`),e.send()})})}},e.open("GET","https://jsonplaceholder.typicode.com/albums"),e.send()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJhbGJ1bUxpc3RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJpIiwiaW5uZXJIVE1MIiwiYWxidW1JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiZWxtIiwiYWxidW1JZCIsImRhdGFzZXQiLCJjYXJkRGl2IiwicXVlcnlTZWxlY3RvciIsInBob3RvcyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImZpbHRlciIsIml0ZW0iLCJwYXJzZUludCIsInQiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJ0aXRsZSIsImFsYnVtVGh1bWJzIiwiYWxidW1GdWxsVXJsIiwiZnVsbFVybCIsImltYWdlQiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJleHBhbmRlZEltZyIsInNldEF0dHJpYnV0ZSIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGVuIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQ0FBLE9BQU9DLGlCQUFpQixPQUFRLFdBQzVCLElBQUlDLEVBQU0sSUFBSUMsZUFDVkMsRUFBYUMsU0FBU0MsZUFBZSxjQUV6Q0osRUFBSUssbUJBQXFCLFdBQ3JCLEdBQXNCLEdBQWxCTCxFQUFJTSxZQUFpQyxLQUFkTixFQUFJTyxPQUFlLENBQzFDLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJLEVBQUdBLElBQ25CTixFQUFXTyxpRUFBbUVELDJHQUNNQSx1REFLOUYsSUFBSUUsRUFBYVAsU0FBU1EsaUJBQWlCLDRCQUN2Q0MsTUFBTUMsS0FBS0gsR0FBWUksUUFBUSxTQUFTQyxHQUN0QyxJQUFJQyxFQUFVRCxFQUFJRSxRQUFRRCxRQUV4QkQsRUFBSWhCLGlCQUFpQixRQUFTLFdBQ3hCLElBQUlDLEVBQU0sSUFBSUMsZUFFZEQsRUFBSUssbUJBQXFCLFdBQ3JCLElBQUlhLEVBQVVmLFNBQVNnQixjQUFjLFlBRXJDLEdBQXNCLEdBQWxCbkIsRUFBSU0sWUFBaUMsS0FBZE4sRUFBSU8sT0FBZSxDQUUxQyxJQUFJYSxFQUFTQyxLQUFLQyxNQUFNdEIsRUFBSXVCLGNBQzVCSCxFQUFTQSxFQUFPSSxPQUFPLFNBQVNDLEdBQzVCLE9BQU9BLEVBQUtULFVBQVlVLFNBQVNWLEtBR3JDRSxFQUFRVCxVQUFZLEdBRXBCLElBQUssSUFBSWtCLEVBQUksRUFBR0EsRUFBSSxFQUFHQSxJQUNuQlQsRUFBUVQscUVBQXVFVyxFQUFPTyxHQUFHQyx3RkFDekNSLEVBQU9PLEdBQUdFLDBFQUNqQ1QsRUFBT08sR0FBR0csc0VBSXpELElBQUlDLEVBQWM1QixTQUFTUSxpQkFBaUIsZ0JBQ3JDQyxNQUFNQyxLQUFLa0IsR0FBYWpCLFFBQVEsU0FBU0MsR0FDbENBLEVBQUloQixpQkFBaUIsUUFBUyxXQUMxQixJQUFJaUMsRUFBZWpCLEVBQUlFLFFBQVFnQixRQUMzQkMsRUFBUy9CLFNBQVNnQyx1QkFBdUIsWUFDekNDLEVBQWNqQyxTQUFTQyxlQUFlLFlBQ2pDZ0MsR0FJREEsRUFBWUMsYUFBYSxNQUFPTCxHQUNoQ0ksRUFBWUUsY0FBY0MsTUFBTUMsUUFBVSxTQUp4Q04sRUFBT0ssTUFBTUMsUUFBVSxhQVN6Q3hDLEVBQUl5QyxLQUFLLHFEQUFzRHpCLFlBQy9EaEIsRUFBSTBDLGFBS3BCMUMsRUFBSXlDLEtBQUssTUFBTywrQ0FDaEJ6QyxFQUFJMEMiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvLy8vIEFsYnVtIGxpc3RlbGVyaW5pbiBnZXRpcmlsbWVzaVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgYWxidW1MaXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGJ1bUxpc3RlJyk7XG5cbiAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgICAgIGFsYnVtTGlzdGUuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYWxidW1pZFwiIGRhdGEtYWxidW0taWQ9XCIke2l9XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPiAgQWxidW0gJHtpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAvLy8vIEFsYnVtIHRodW1ibmFpbGxlcmluaW4gZ2V0aXJpbG1lc2lcbiAgICAgIHZhciBhbGJ1bUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtZ3JvdXAtaXRlbS5hbGJ1bWlkJyk7XG4gICAgICAgICAgQXJyYXkuZnJvbShhbGJ1bUl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkge1xuICAgICAgICAgICAgdmFyIGFsYnVtSWQgPSBlbG0uZGF0YXNldC5hbGJ1bUlkO1xuXG4gICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9zID0gSlNPTi5wYXJzZShYSFIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b3MgPSBwaG90b3MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxidW1JZCA9PT0gcGFyc2VJbnQoYWxidW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC02IGFsYnVtLXRodW1iXCIgZGF0YS1mdWxsLXVybD1cIiR7cGhvdG9zW3RdLnVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidGh1bWJuYWlsc1wiIHNyYz1cIiR7cGhvdG9zW3RdLnRodW1ibmFpbFVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Bob3Rvc1t0XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLy8gRnVsbCBmb3RvZ2ZhcsSxbsSxbiBnZXRpcmlsbWVzaVxuICAgICAgICAgIHZhciBhbGJ1bVRodW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGJ1bS10aHVtYicpO1xuICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGFsYnVtVGh1bWJzKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsYnVtRnVsbFVybCA9IGVsbS5kYXRhc2V0LmZ1bGxVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlQiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZGVkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZ0ltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwYW5kZWRJbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VCLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhbGJ1bUZ1bGxVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJbWcucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgWEhSLm9wZW4oXCJHRVRcIiwgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJHthbGJ1bUlkfS9waG90b3NgKTtcbiAgICAgICAgICAgICAgICAgICAgWEhSLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFhIUi5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtc1wiKTtcbiAgICBYSFIuc2VuZCgpO1xufSk7Il19