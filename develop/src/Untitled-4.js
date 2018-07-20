class categoryItem{
  constructor(el) {
    this.dom = el;
    this.count = 0;
  }
  toggle = () => {
    this.dom.classList.contains('active')?this.dom.classList.remove('active'):this.dom.classList.add('active')
  }
  isActive = () => {
    return this.dom.classList.contains('active');
  }
}
class category{
  constructor(){
    this.dom = document.getElementsByClassName('category_wrapper');
    this.init();
  }
  init = () => {
    this.eles = [];
    this.dom.querySelectorAll('.category_ele').forEach(el=>this.eles.push(new categoryItem(el)));
    for(let i = 0; i<this.eles.length;i++){
      this.eles[i].dom.addEventListener('click',()=> this.handle(this.eles[i]),false);
    }
  }
  handle = (ele) => {
    for(let i = 0 ;i<this.eles.length;i++){
      this.eles[i].isActive ? this.count++:this.count
    }
    if(this.count<3) ele.toggle();
  }
}