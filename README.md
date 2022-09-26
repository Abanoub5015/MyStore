# MyStore By Abanoub Magdy

### MyStore e-commerce made by (Angular) front-end using Single Page Application(SPA) technology. Along with some styling. 
In total 
* 8 components
* 4 services 
* a (Product Model) that help us to feed the whole project.
#### also using the app-routing Module to be easy to navigate between components using URLs of each component


# About The Project 
## [Demo]
| [![]()]() | [![]()]() | 
|:---:|:---:|
| **Home**  | **Cart**  |
| [![](https://user-images.githubusercontent.com/82307701/192167435-8bf01fcd-72f7-4249-9f7f-2f3b3d5813d8.png)](http://mystore-udacity.tk/) | [![](https://user-images.githubusercontent.com/82307701/192167449-9b2b62bd-94f3-4f7d-99d4-e165f86d98cc.png)](http://mystore-udacity.tk/cart) |

👉🏻[Here's the website [mystore-udacity]](http://mystore-udacity.tk/)

## [Pages]

* **Home [ProductList]** <br/>💡[you can add any item to cart & every item have a limit of 10, Sorry we don't have a lot of our stock🤭]💡

* **Cart**

* **Product Details** <br/>💡[by clicking on (picture) of product list item]... you will navigate to (Detail of this product item directly💡

* **Orders**

* **404 page** <br/>💡[when user enter wrong url inside the website domain.. using(wild card to navigate from incorrect route)💡


## [Built With]

* [![Angular][Angular.io]][Angular-url]
* 1.[![Bootstrap][Bootstrap.com]][Bootstrap-url] for styling some btns, cards, input(text, textarea)
* 2.[angular/flex-layout] for margin and alignment

<!-- download -->
## [Download And installation]

Download this template from [Github](https://github.com/Abanoub5015/MyStore/archive/refs/heads/main.zip)


* Install dependencies
```
npm install
```
* Run locally
```
ng serve
```


* ## other Commands
```
npm install --save-dev typescript     
npm install --save-dev @angular/language-service    
npm eslint  
npm install -g @angular/cli 
ng --version 
  
ng g c components/PageNotFound   
  ng help 
  ng serve --port 3000 
  ng serve --open      
ng g m Bookshelf  
 ng g s services/post 
 ng g s services/post --project my-app 
 ng g s services/post --skip-tests    

1. npm i bootstrap@5.2.0
2. npm i -s @angular/flex-layout @angular/cdk
```

* ## clean & fix Commands
```
ng cache clean
npm config set legacy-peer-deps true  
```



* ## 1.git Commands [// means once]
```
//git init 
//git add README.md  
  git add *
  git commit -m "publish project"  
//git branch -m main 
//git remote add origin https://github.com/Abanoub5015/MyStore.git
  git push origin main
git pull origin main 
```

* ## 2.git (deploy-page) Commands [// means once]
```
[1] //npm i -g angular-cli-ghpages
[2] ng build 
[3] ngh --dir dist/my-store ->[for deploy]
```


* ## 3.after every update:
```
-----------------------------
git add *
git commit -m "update commit"
git push origin main

ng build
ngh --dir dist/my-store ->[for deploy]
-----------------------------
```




[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[angular/flex-layout]: https://github.com/angular/flex-layout

