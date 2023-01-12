function data () {
  let content = quill.root.innerHTML;
  let titleValue = title.value;
  let authorValue = author.value;
  let resumeValue = resume.value;
  let date = today.getDate() + "/"+(today.getMonth()+1)+"/"+today.getFullYear()
  let id =  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return [titleValue,content,authorValue,date,resumeValue,id]
}


function formatData(datas){
  datas.forEach(data => {
    formatedDatas.push('`'+data+'`')
  });
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
let resume           = document.querySelector("#resume")
let today            = new Date();
let formatedDatas    = []
let copy             =  document.querySelector("#copy")

btn.addEventListener("click", (e)=> {
  e.preventDefault()
  copy.textContent = "["+formatData(data())+"]";    
  navigator.clipboard.writeText(copy.textContent);
})


