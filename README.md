# Dexs-Modal
Dexs, or Decks is a simple modal js library. Built completly with HTML DOM objects, and having no depenencies, Dexs is a super tiny modal libary. This libary was brought to you by <a href="https://PolarComputersInc.com">Polar Computers Inc.</a> and the Pace Software Team. This project wouldn't have be possible without the amazing insperation from <a href="https://micromodal.now.sh/">MicroModal</a>, <a href="https://github.hubspot.com/vex/">Vex Modal</a>, and <a href="https://getbootstrap.com/">Bootstrap Modal</a>. With the help of contrubitors and the Pace Team at Polar, we keep this libary uptodate.

## What is Dexs?
Dexs, is a simple modal library. It is super tiny, and isn't reliant on Bootstrap or jQuery. Making it perfect for a super simple project. We made Dexs while working on the Pace Productive Suite. While, we all love the Bootstrap and jQuery libraries, they are large and bulky and we didn't need many components from them. So we build our own Javascript libary to solve our promblems. But Dexs, was designed with a lot more in mind, other than being slim. One of the biggest things we needed was the ability to open multiple modals and them to stack ontop each other. What we needed was for you able to open one modal, then open a second. When closing the second, go back to the first. We call this layering of modals, a stack.

## Installation
Installing Dexs is super simple too. Just add the libary and your are ready to go. We highly recommend once you have downloaded the files, you minify them, this will decrease the size of the files.

```
<link rel="stylesheet" type="text/css" href="dexs-style.css" ></link>
<script src='dexs.js'></script>
```


## Examples
Here are some examples. Most of these are pretty simple and while Dexs doesn't do much more than is described, what you can do is pretty much limitless. This is just a simple framework we have built to make multi-level modals simplier.


### Simple Modal
This is a basic modal, with not footer buttons and just text. It will auto scale to meet the size of the contents. Anything you put inside the `.modal-body` class will get the standard Dexs 
```
<modal class="dexs">
  <div class="modal-body">
    <h1>Hello World</h1>
    <p>This is a basic Dexs Modal</p>
  </div>
</modal>
```


### Small Modal
By adding the class `.dexs--small` to the main element it will create a small modal with a max with of `500px`.
```
<modal class="dexs dexs--small">
  <div class="modal-body">
    <h1>Hello World</h1>
    <p>This is a basic Dexs Modal</p>
  </div>
</modal>
```


### Modal with Footer
This is a regular sized modal, with a footer. The footer allows you to place elements at the bottom modal with a separator. These elements will standardly `align-right` but you can change at with a custom class.

```
<modal class="dexs">
  <div class="modal-body">
    <h1>Titile</h1>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary">Create Crate</button>
    <button type="button" class="btn btn-primary">Upgrade to Premium</button>
  </div>
</modal>
```


### Modal with Sticky Footer
Some times you have content that will take up more than the standard amount of screen. This will cause the modal to automatically enable scroll on the modal, so it doesn't overflow the screen. By adding the class `.sticky-footer` to the `.modal-footer` element. It will keep the footer always visible at the bottom of the modal as you scroll though elements inside your modal-body.

```
 <modal class="dexs">
  <div class="modal-body">
    <h1>Titile</h1>
  </div>
  <div class="modal-footer sticky-footer">
    <button type="button" class="btn btn-secondary">Create Crate</button>
    <button type="button" class="btn btn-primary">Upgrade to Premium</button>
  </div>
</modal>
```

### Disable Adding to stack
Normally if you open a new modal while an another modal is open it is added to a deck. This will record the order that modals are opened, so when you close one it will go to the last one open. To disable a modal being added to the history stack add the attribute `disable-stack` to the element.

```
<modal class="dexs dexs--small" disable-deck>
  <div class="modal-body">
    <h1>Titile</h1>
  </div>
</modal>
```

| | Command | Description |
| --- | --- | --- |
| Open Modal | `dexs.open( #id );` | Opens modal by id and adds existing open modals to stack. |
| Close Modal | `dexs.close();` | Will close current open modal. | 
