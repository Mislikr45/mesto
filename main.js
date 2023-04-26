(()=>{"use strict";const e=class{constructor({link:e,name:t},s,r,i){this._name=t,this._link=e,this._template=s,this._openPopupImage=r,this._set=i}_getTemplateCard(){return this._template.content.querySelector(".card-item").cloneNode(!0)}_handleDelete(){this._newCard.remove()}_handleCheckTodoCard(){this._newCard.querySelector(".card-item__like").classList.toggle("card-item__like_selected")}_setEventListeners(){this._newCard.querySelector(".card-item__trash").addEventListener("click",(()=>this._handleDelete())),this._newCard.querySelector(".card-item__like").addEventListener("click",(()=>this._handleCheckTodoCard())),this._newCard.querySelector(".card-item__image").addEventListener("click",(()=>{this._openPopupImage(this._title,this._link)}))}_setData(){this._newCard.querySelector(".card-item__title").textContent=this._name;const e=this._newCard.querySelector(".card-item__image");e.src=this._link,e.alt=this._name}getView(){return this._newCard=this._getTemplateCard(),this._setEventListeners(),this._setData(),this._newCard}},t=class{constructor(e,t){this._config=e,this._formElement=t,this._saveButton=this._formElement.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector))}_showInputEror=e=>{this._errorElement=this._formElement.querySelector(`.${e.id}-error`),this._errorElement.classList.add(this._config.errorClass),this._errorElement.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass)};_hideInputEror=e=>{this._errorElement=this._formElement.querySelector(`.${e.id}-error`),this._errorElement.classList.remove(this._config.errorClass),this._errorElement.textContent="",e.classList.remove(this._config.inputErrorClass)};_checkInputValidity=e=>{e.validity.valid?this._hideInputEror(e):this._showInputEror(e)};_hasInvalidInput=e=>e.some((e=>!e.validity.valid));disableSubmitButton(){this._saveButton.classList.add(this._config.inactiveButtonClass),this._saveButton.setAttribute("disabled","disabled")}_deleteDisableButton(){this._formElement.querySelector(this._config.submitButtonSelector).classList.remove(this._config.inactiveButtonClass),this._formElement.querySelector(this._config.submitButtonSelector).removeAttribute("disabled")}_toggleButtonState=e=>{this._hasInvalidInput(e)?this.disableSubmitButton():this._deleteDisableButton()};_setEventListeners=()=>{this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState(this._inputList)}))}))};enableValidation(){this._setEventListeners()}},s=class{constructor(e){this._selector=document.querySelector(e),this._popupList=document.querySelectorAll(".popup")}_handleEscClose(){console.log(),document.addEventListener("keydown",(e=>{if("Escape"===e.key){const e=document.querySelector(".popup_opened");this.close(e)}}))}setEventListeners(){this._selector.addEventListener("click",(e=>{const t=e.target.classList;(t.contains("popup")||t.contains("popup__close"))&&this.close()}))}open(){this._selector.classList.add("popup_opened"),this._handleEscClose()}close(){this._selector.classList.remove("popup_opened")}},r=class extends s{constructor({selector:e,handleFormSubmit:t}){super(e),this._handleFormSubmit=t,this._form=this._selector.querySelector(".popup__form"),this._inputList=this._form.querySelectorAll(".popup__input")}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}},i=document.querySelector(".popup_edit-profile"),o=document.querySelector(".popup__input_type_name"),n=document.querySelector(".popup__input_type_about"),l=document.querySelector(".profile__edite"),a=document.querySelector("#card-item__template"),_=document.querySelector(".popup_card-form"),u=document.querySelector(".profile__add"),c=new class extends s{constructor(e){super(e),this._popup=document.querySelector(e),this._img=this._popup.querySelector(".popup__img"),this._tag=this._popup.querySelector(".popup__tag")}setEventListeners(){super.setEventListeners()}open(e,t){super.open(),console.log(t,e),this._img.src=t,this._img.alt=e,this._tag.textContent=e}}(".popup_img-zoom"),p=new class{constructor({items:e,renderer:t},s){this._renderedItems=e,this._renderer=t,this._container=document.querySelector(s)}renderItems(){this._renderedItems.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.append(e)}}({items:initialCards,renderer:t=>{const s=new e(t,a,(()=>c.open(t.title,t.link))).getView();p.addItem(s)}},".cards");p.renderItems();const d=new class{constructor({userName:e,userAbout:t}){this._userName=document.querySelector(e),this._userAbout=document.querySelector(t)}getUserInfo(){return{name:this._userName.textContent,about:this._userAbout.textContent}}setUserInfo({name:e,about:t}){this._userName.textContent=e,this._userAbout.textContent=t}}({userName:".profile__name",userAbout:".profile__about"});l.addEventListener("click",(()=>{o.value=d.getUserInfo().name,n.value=d.getUserInfo().about,v.open()})),u.addEventListener("click",(()=>{m.open()}));const h=({place:t,link:s}=data,r,i)=>(console.log(t,s),new e({place:t,link:s},r,(()=>c.open(t,s))).getView()),m=new r({selector:".popup_card-form",handleFormSubmit:e=>{p.addItem(h(e,a))}}),v=new r({selector:".popup_edit-profile",handleFormSubmit:e=>{const{name:t,about:s}=e;d.setUserInfo({name:t,about:s}),v.close()}});v.setEventListeners(),m.setEventListeners(),c.setEventListeners();const E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};new t(E,i).enableValidation(),new t(E,_).enableValidation()})();