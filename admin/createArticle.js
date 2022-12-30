function data () {
  let content = quill.root.innerHTML;
  let titleValue = title.value;
  let authorValue = author.value;
  let date = today.getDate() + "/"+(today.getMonth()+1)+"/"+today.getFullYear()
  return [titleValue,content,authorValue,date]
}


function formatData(datas){
  for (let i=0; i<4 ; i++){
      formatedDatas.push('`'+datas[i]+'`')
  }   
  return(formatedDatas.join(","))  
}

let toolbarOption = [
  ['bold', 'italic', 'underline', 'strike'],        
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
  [{ 'align': [] },"image","link"],  
  ['clean']                                        
];
let options = {
  debug: 'info',
  modules: {
    toolbar: toolbarOption
  },
  placeholder: 'Ecrivez le contenu de votre article...',
  readOnly: false,
  theme: 'snow'
};

let quill = new Quill('#editor',options);

let btn              = document.querySelector("#submit")
let title            = document.querySelector("#title")
let author           = document.querySelector("#author")
let today            = new Date();
let formatedDatas    = []
let copy             =  document.querySelector("#copy")

btn.addEventListener("click", (e)=> {
  e.preventDefault()
  copy.textContent = "["+formatData(data())+"]";    
  navigator.clipboard.writeText(copy.textContent);
})


