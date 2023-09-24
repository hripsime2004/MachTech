// clock analog

let clockAnalog = document.querySelector(".clock-analog p");

setInterval(() => {
  let hours = new Date().getHours();
  let min = new Date().getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  clockAnalog.innerText = hours + ":" + min;
});

// new folder

let newFolder = document.querySelector(".newFolder");
let newFolderIcon = document.querySelector(".newFolderIcon");
let contentLeftSection = document.querySelector(".content-leftSection");

const textContRemove = [
  "Удалить папку",
  "Добавить подраздель",
  "Добавить пароль",
  "Добавить в избранное",
];

let countFolder = 0;
const createFolder = (block) => {
    countFolder++
  newFolder.style.display = "none";
  let nameFolder = document.createElement("div");
  nameFolder.className = "name_folder";
  let folderIcon = document.createElement("i");
  folderIcon.className = "fa fa-folder";
  let textNameFolder = document.createElement("p");
  textNameFolder.innerText = "Название папки";
  let removeFolder = document.createElement("i");
  removeFolder.className = "fa fa-ellipsis-vertical deleteFolder";
  nameFolder.append(folderIcon, textNameFolder, removeFolder);
  removeFolder.style =
    "  color: #4798f0;  cursor: pointer;  position: absolute; right: 6%;";
  block.append(nameFolder);
  let boolFolder = false;
  let contRemove;
  removeFolder.onclick = () => {
    if (boolFolder == false) {
      contRemove = document.createElement("div");
      contRemove.className = "contRemove";
      nameFolder.append(contRemove);
      textContRemove.forEach((item) => {
        let p = document.createElement("p");
        p.className = "textRemove";
        contRemove.append(p);
        p.innerText = item;
      });
      boolFolder = true;
    } else {
      contRemove.remove();
      boolFolder = false;
    }
    
    let textRemove = document.querySelectorAll(".textRemove");
    textRemove.forEach((item) => {
      item.onclick = function () {
        if (item.innerText == "Удалить папку") {
          nameFolder.remove();
        countFolder--;
        if(countFolder == 0) {
            newFolder.style.display = 'flex'
        }
        }
      };
    });
  };
};

newFolder.onclick = () => {
  createFolder(contentLeftSection);
};

newFolderIcon.onclick = () => {
  createFolder(contentLeftSection);
};


// new password

let newPassword = document.querySelector('.newPassword');
let contentArticle = document.querySelector('.contentArticle');
let newKey = document.querySelector('#new-key')
let countPassword = 0

const createPassword = () => {
  countPassword++
  newPassword.style.display = 'none';
  let contentPassword = document.createElement('div');
  contentPassword.className = 'content-article';
  contentArticle.append(contentPassword);
  let itemArticle = document.createElement('div');
  itemArticle.className = 'item_article';
  let iconItemArticle = document.createElement('i');
  iconItemArticle.className = 'far fa-image';
  let h4 = document.createElement('h4');
  h4.innerText = 'Название пароля';
  let itemArticle2 = document.createElement('div');
  itemArticle2.className = 'item_article';
  let aLinkPassword = document.createElement('a');
  aLinkPassword.setAttribute('href','#');
  aLinkPassword.innerText = 'https://www.site.com';
  let iconItemArticle2 = document.createElement('i');
  iconItemArticle2.className = 'fa fa-star';
  iconItemArticle2.id = 'smallStar'
  let removePassword = document.createElement('i');
  removePassword.className = 'fa fa-ellipsis-vertical'
  removePassword.id = 'ellipsis';
  removePassword.style = ' color: #4798f0; cursor: pointer; position: absolute;right: 6%;';

  let boolFolder = false;
  let contRemove;
  removePassword.onclick = () => {
    if (boolFolder == false) {
      contRemove = document.createElement("div");
      contRemove.className = "contRemove";
      itemArticle2.append(contRemove);
      textContRemove.forEach((item) => {
        let p = document.createElement("p");
        p.className = "textRemove";
        contRemove.append(p);
        p.innerText = item;
      });
      boolFolder = true;
    } else {
      contRemove.remove();
      boolFolder = false;
    }
    
    let textRemove = document.querySelectorAll(".textRemove");
    textRemove.forEach((item) => {
      item.onclick = function () {
        if (item.innerText == "Удалить папку") {
          contentPassword.remove();
        countPassword--;
        if(countPassword == 0) {
          newPassword.style.display = 'flex'
        }
        }
      };
    });
  }


  itemArticle2.append(aLinkPassword,iconItemArticle2,removePassword)
  itemArticle.append(iconItemArticle,h4)
  contentPassword.append(itemArticle,itemArticle2);

}

newPassword.onclick = () => {
    createPassword();
}

newKey.onclick = () => {
  createPassword()
}



//Название папки copy
function copyPassword(){
  let passwordToCopy = document.querySelector(".right-input");
  passwordToCopy.select();
  document.execCommand("copy");
}



//hide password
let peninput3 = document.getElementById("peninput3");
let icon = document.getElementById("icon");
icon.addEventListener("click", () => {
	peninput3.type = peninput3.type == "password" ? "text" : "password";
	icon.className =
		icon.className == "fa-regular fa-eye" ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
});

//Сложность
let peninput4 = document.getElementById("peninput4");
function createPasswordd(){
let elements = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXYyZz@!?.,$&*"; 
let lengthPass = 11; 
let fullPassword = ""; 
for( let i = 0; i < lengthPass; i++){
  let randomValue = Math.floor(Math.random() * elements.length);
  fullPassword += elements.substring(randomValue, randomValue + 1);
  peninput4.value = fullPassword; 
}
}

//weak password
function checkPasswordStrength() {
  const peninput3 = document.getElementById("peninput3").value;
  const strengthMeter = document.getElementById("password-strength");

  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const moderateRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (strongRegex.test(peninput3)) {
      strengthMeter.className = "password-strength password-strong";
      strengthMeter.textContent = "Strong";
  } else if (moderateRegex.test(peninput3)) {
      strengthMeter.className = "password-strength password-moderate";
      strengthMeter.textContent = "Moderate";
  } else {
      strengthMeter.className = "password-strength password-weak";
      strengthMeter.style.color = "red";
      strengthMeter.style.padding = "8px";
      strengthMeter.style.background = "#ffe8e8";
      strengthMeter.style.borderRadius = "50px";
      strengthMeter.innerHTML = '<i class="fa fa-warning"></i> Слабый пароль';
  }
}




// popup

let poppen = document.querySelector('.poppen');
let xmarkbut = document.querySelector('.xmarkbut');
let closePopup2 = document.querySelector('.closePopup2');
let section = document.querySelector('section')

xmarkbut.onclick = () => { 
  poppen.style.display = 'flex';
  section.style.background = 'silver'
}

closePopup2.onclick = () => {
  poppen.style.display = 'none'
  section.style.background = 'white'
}


//popup2

let poppen2 = document.querySelector('.poppen2');
let xmarkbut1 = document.querySelector('.xmarkbut1');
let closePopup21 = document.querySelector('.closePopup21');

xmarkbut1.onclick = () => {
  poppen2.style.display = 'flex';
  section.style.background = 'silver'
}

closePopup21.onclick = () => {
  poppen2.style.display = 'none';
  section.style.background = 'white'
}

//popup3
let poppen3 = document.querySelector('.poppen3');
let xmarkbut2 = document.querySelector('.xmarkbut2');
let closePopup3 = document.querySelector('.closePopup3');

xmarkbut2.onclick = () => {
  poppen3.style.display = 'flex';
  section.style.background = 'silver'
}

closePopup3.onclick = () => {
  poppen3.style.display = 'none';
  section.style.background = 'white'
}

let openSearchBlock = document.querySelector('#open-search__block');
let openSearch = document.querySelector('.open__search');
let boolSaerch = false;

openSearchBlock.onclick = () => {
  if(boolSaerch == false) {
    openSearch.style.display = 'block';
    boolSaerch = true
  }
  else {
    openSearch.style.display = 'none';
    boolSaerch = false
  }
}