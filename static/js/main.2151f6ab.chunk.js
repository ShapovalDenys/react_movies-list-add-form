(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(t){t.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(t,e,i){t.exports=i(20)},,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var r=i(0),a=i.n(r),n=i(7),l=i.n(n),s=(i(15),i(9)),o=i(2),m=i(3),c=i(5),d=i(4),u=(i(16),i(17),i(18),function(t){var e=t.title,i=t.description,r=t.imgUrl,n=t.imdbUrl;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-image"},a.a.createElement("figure",{className:"image is-4by3"},a.a.createElement("img",{src:r,alt:"Film logo"}))),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",{className:"media"},a.a.createElement("div",{className:"media-left"},a.a.createElement("figure",{className:"image is-48x48"},a.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),a.a.createElement("div",{className:"media-content"},a.a.createElement("p",{className:"title is-8"},e))),a.a.createElement("div",{className:"content"},i,a.a.createElement("br",null),a.a.createElement("a",{href:n},"IMDB"))))});u.defaultProps={description:""};var p=function(t){var e=t.movies;return a.a.createElement("div",{className:"movies"},e.map((function(t){return a.a.createElement(u,Object.assign({key:t.imdbId},t))})))};p.defaultProps={movies:[]};i(19);var h=i(1),g=i.n(h),b=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),E=new RegExp(/\w/),v=function(t){Object(c.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(o.a)(this,i);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",inputErrorTitle:!1,inputErrorDescription:!1,inputErrorImgUrl:!1,inputErrorImdbUrl:!1,inputErrorImdbId:!1,activeButton:!0},t.handleSubmit=function(e){e.preventDefault(),t.setState((function(e){var i=e.title,r=e.description,a=e.imdbId,n=e.imdbUrl,l=e.imgUrl;return(0,t.props.addMovie)({title:i,description:r,imgUrl:l,imdbUrl:n,imdbId:a}),{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",inputErrorTitle:!1,inputErrorDescription:!1,inputErrorImgUrl:!1,inputErrorImdbUrl:!1,inputErrorImdbId:!1}}))},t.onBlur=function(e){var i=e.target,r=t.state,a=r.title,n=r.description,l=r.imdbId,s=r.imdbUrl,o=r.imgUrl;"inputTitle"===i.id&&(0!==a.trim().length||E.test(a)?t.setState({inputErrorTitle:!1}):t.setState({inputErrorTitle:!0})),"inputDescription"===i.id&&(0===n.trim().length?t.setState({inputErrorDescription:!0}):t.setState({inputErrorDescription:!1})),"imgUrl"===i.id&&(b.test(o)?t.setState({inputErrorImgUrl:!1}):t.setState({inputErrorImgUrl:!0})),"imdbUrl"===i.id&&(b.test(s)?t.setState({inputErrorImdbUrl:!1}):t.setState({inputErrorImdbUrl:!0})),"idbId"===i.id&&(0===l.trim().length?t.setState({inputErrorImdbId:!0}):t.setState({inputErrorImdbId:!1}))},t.onTitleChange=function(e){t.setState({title:e.target.value})},t.onDescriptionChange=function(e){t.setState({description:e.target.value})},t.onImgUrlChange=function(e){t.setState({imgUrl:e.target.value})},t.onImdbUrlChange=function(e){t.setState({imdbUrl:e.target.value})},t.onImdbIdChange=function(e){t.setState({imdbId:e.target.value})},t.buttonSwitch=function(){var e=t.state,i=e.title,r=e.description,a=e.imdbId,n=e.imdbUrl,l=e.imgUrl;i.trim().length>0&&r.trim().length>0&&b.test(l)&&b.test(n)&&a.trim().length>0&&t.setState({activeButton:!1})},t}return Object(m.a)(i,[{key:"render",value:function(){var t=this.state,e=t.title,i=t.description,r=t.imgUrl,n=t.imdbUrl,l=t.imdbId,s=t.activeButton;return a.a.createElement("form",{onSubmit:this.handleSubmit,onChange:this.buttonSwitch},a.a.createElement("label",{htmlFor:"inputTitle"},"Title:\xa0"),this.state.inputErrorTitle&&a.a.createElement("span",{className:"inputError"},"Please, enter the title!"),a.a.createElement("input",{id:"inputTitle",onBlur:this.onBlur,className:g()("input",{active:this.state.inputErrorTitle}),value:e,onChange:this.onTitleChange,required:!0}),a.a.createElement("label",{htmlFor:"inputDescription"},"Description:\xa0"),this.state.inputErrorDescription&&a.a.createElement("span",{className:"inputError"},"Please, enter the description!"),a.a.createElement("input",{id:"inputDescription",onBlur:this.onBlur,className:g()("input",{active:this.state.inputErrorDescription}),value:i,onChange:this.onDescriptionChange,required:!0}),a.a.createElement("label",{htmlFor:"imgUrl"},"ImgUrl:\xa0"),this.state.inputErrorImgUrl&&a.a.createElement("span",{className:"inputError"},"Please, enter correct ImgUrl!"),a.a.createElement("input",{id:"imgUrl",onBlur:this.onBlur,className:g()("input",{active:this.state.inputErrorImgUrl}),value:r,onChange:this.onImgUrlChange,required:!0}),a.a.createElement("label",{htmlFor:"imdbUrl"},"ImdbUrl:\xa0"),this.state.inputErrorImdbUrl&&a.a.createElement("span",{className:"inputError"},"Please, enter correct ImgUrl!"),a.a.createElement("input",{id:"imdbUrl",onBlur:this.onBlur,className:g()("input",{active:this.state.inputErrorImdbUrl}),value:n,onChange:this.onImdbUrlChange,required:!0}),a.a.createElement("label",{htmlFor:"idbId"},"ImdbId:\xa0"),this.state.inputErrorImdbId&&a.a.createElement("span",{className:"inputError"},"Please, enter the IdbId!"),a.a.createElement("input",{id:"idbId",onBlur:this.onBlur,className:g()("input",{active:this.state.inputErrorImdbId}),value:l,onChange:this.onImdbIdChange,required:!0}),a.a.createElement("button",{disabled:s,type:"submit",className:"button"},"ADD"))}}]),i}(r.Component),I=i(8),U=function(t){Object(c.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(o.a)(this,i);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={movies:I},t.addMovie=function(e){t.setState((function(t){return{movies:[].concat(Object(s.a)(t.movies),[e])}}))},t}return Object(m.a)(i,[{key:"render",value:function(){var t=this.state.movies;return a.a.createElement("div",{className:"page"},a.a.createElement("div",{className:"page-content"},a.a.createElement(p,{movies:t})),a.a.createElement("div",{className:"sidebar"},a.a.createElement(v,{addMovie:this.addMovie})))}}]),i}(r.Component);l.a.render(a.a.createElement(U,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2151f6ab.chunk.js.map