// Dexs Modal JS Library v1.0.1
// github.com/PolarComputer/Dexs-Modal


// Add Shade When Done Loading
document.addEventListener("DOMContentLoaded", function(){
  var shadeElm = document.createElement( "div" );
  shadeElm.classList.add('dexs-shade');
  shadeElm.classList.add('fade');
  document.body.appendChild( shadeElm );

  document.getElementsByClassName( "dexs-shade" )[0].addEventListener( "click", function(){
    dexs.close();
  });

});


// Open Shade Function
const shade = [];

shade.show = function() {
  var shadeElm = document.getElementsByClassName( "dexs-shade" );
  if ( shadeElm.length != 1 ) {
    console.error( "Dexs Modal: Failed to reveal Dexs Modal Shade. There must be exactly one element with the class name 'dexs-shade'." );
  } else {
    shadeElm = shadeElm[0];
    shadeElm.classList.add( "show" );
  }
}

shade.hide = function() {
  var shadeElm = document.getElementsByClassName( "dexs-shade" );
  if ( shadeElm.length != 1 ) {
    console.error( "Dexs Modal: Failed to suppress Dexs Modal Shade. There must be exactly one element with the class name 'dexs-shade'." );
  } else {
    shadeElm = shadeElm[0];
    shadeElm.classList.remove( "show" );
  }
}






// dexs modal
const dexs = [];

/*================ Open ================
  Opens a modal based on ID. Add
  existing open modal to stack and close
  them.
  ======================================*/
dexs.open = function( _id ) {
  var dexsElm = document.getElementById( _id );

  // Checks to see if element exists
  if ( !dexsElm ) {
    console.error( "Dexs Modal: Failed to locate #" + _id + ", because element doesn't exist. Please use the element ID."  );
  } else {

    // Open Shade
    shade.show();

    // check for other decks
    var activeStacks = document.querySelectorAll( "[ data-stack-level ]" );

    // Close current open modal and add stack level
    var openModals = document.querySelectorAll( "modal.dexs.open" );
    if ( openModals.length == 1 && openModals[0].id != _id ) { // stops adding deck level to current open modal
      openModals = openModals[0];

      // Add Stack Level attr to element
      if ( !openModals.hasAttribute( "disable-stack" ) ) {
        var highestStackLevel = this.stack();
        if ( highestStackLevel.length != 0 ) {
          highestStackLevel = highestStackLevel[0].level + 1;
        } else {
          highestStackLevel = 0;
        }
        openModals.dataset.stackLevel = highestStackLevel;
      }
      openModals.classList.remove( "open" );
    }

    // Opens New element
    dexsElm.classList.add( "open" );
  }
}



/*============== closeAll ==============
  The close all function will close all
  open modals and  clear and current
  open stacks.
  ======================================*/
dexs.closeAll = function() {
  shade.hide(); // Close Shade
  this.clearStack(); // Clear Stack

  // Close all possible modals
  var openModals = document.querySelectorAll( "modal.dexs.open" );
  for ( var i = 0; i < openModals.length; i++ ) {
    openModals[i].classList.remove( "open" );
  }
}



/*=============== Close ================
  Close only the current modal, and
  remove it from the stack, and open the
  next modal in the stack.

  @return - false if failed to close
  ======================================*/
dexs.close = function() {
  var openModals = document.querySelectorAll( "modal.dexs.open" ); // get current open modal

  // Check if modal is open
  if ( openModals.length != 1 ) {
    return false;
  }

  openModals = openModals[0]; // select the only element
  this.removeFromStack( openModals.id ); // remove this element from stack => shouldn't be there - precation
  openModals.classList.remove( "open" ); // close the modaul

  // Hide shade if required
  var stack = this.stack();
  if ( this.stack().length == 0 ) {
    shade.hide();
  } else {
    this.open( stack[0].id );
  }

  return true;

}



/*============= Is Open ================
  returns boolean on if the modal based
  on the id is open or closed

  @return - false - modal closed or error
  @return - true - if modal open
  ======================================*/
dexs.isOpen = function( _id ) {
  if ( document.getElementById( _id ) && document.getElementById( _id ).classList.contains( "open" ) ) {
    return true;
  }
  return false;
}



/*=============== Stack ================
  Returns list of arrays of modals in
  stack, with newest in stack first.
  Each object has the level number and
  the stack ID.

  @return - array of modal id's in stack
  ======================================*/
dexs.stack = function() {
  var activeStacks = document.querySelectorAll( "[ data-stack-level ]" ); // get all active stacks

  // Create Array of objects from active Stacks
  var resultStacks = [];
  for ( var i = 0; i < activeStacks.length; i++ ) {
    resultStacks.push( { id: activeStacks[ i ].id, level: parseInt( activeStacks[ i ].getAttribute( "data-stack-level" ) ) } );
  }

  // Sort Array of objects with highest level number first
  resultStacks.sort(function(a, b){
      if(a.level < b.level) return 1;
      if(a.level > b.level) return -1;
      return 0;
  });

  return resultStacks;
}



/*============ Clear Stack ==============
  Removes all modals from history stack.
  ======================================*/
dexs.clearStack = function() {
  var activeStacks = document.querySelectorAll( "[ data-stack-level ]" );
  for ( var i = 0; i < activeStacks.length; i++ ) {
    activeStacks[i].removeAttribute( "data-stack-level" );
  }
}



/*========= Remove From Stack ==========
  Removes the stack level attribute
  from the element with the id that
  is passed.
  ======================================*/
dexs.removeFromStack = function( _id ) {
  document.getElementById( _id ).removeAttribute( "data-stack-level" );
}
