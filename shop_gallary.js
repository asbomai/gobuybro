function mySearch(){
  let filter = document.getElementById('search').value.toUpperCase();
  let items = document.querySelectorAll('.content');
  let list = document.getElementsByTagName('h4');
  
  for(var i = 0; i < list.length; i++){
    let a =items[i].getElementsByTagName('h4')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    
    if(value.toUpperCase().indexOf(filter) > -1){
      items[i].style.display = "";
    }else{
      items[i].style.display = "none";
    }
    console.log('Emty Result')

  }
}





















function myFunction(){

alert("sorry check back later/02-jan-2022");

}

