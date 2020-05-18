export default function Output(t:string):void {
  window.addEventListener("load", () => {
    const box = document.getElementById('OUTPUT');
    if (box) {
      box.insertAdjacentHTML('beforeend', '<li>' + t + '</li>');
    }
  });
}