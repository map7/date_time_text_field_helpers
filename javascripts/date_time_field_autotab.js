/* This uses LowPro behaviours so you will need library from 
 http://svn.danwebb.net/external/lowpro/tags/rel_0.5/dist/lowpro.js
 
 I am no javascript pro so feel free to improve it and let me know. 
*/
var AutoJumpToNextOnLength = Behavior.create({
  initialize: function(inputLength)
  {
    this.inputLength = inputLength;
    this.element.setAttribute('autocomplete','off');
    this.keyRange = $R(48, 90).toArray().concat($R(96, 105).toArray()); // all alphanumeric characters
    this.keyIgnore = $R(110, 190).toArray();
  },
  onkeydown: function(e)
  {
    // Stops extra characters being entered    
      if (this.keyIgnore.include(e.keyCode)){
	  return false;
      }

    if (this.keyRange.include(e.keyCode)) {
      return !(this.element.getValue().length >= this.inputLength);
    } else {
      return true;
    }
  },
  onkeyup: function(e)
  {
    if (this.keyRange.include(e.keyCode) && (this.element.getValue().length == this.inputLength)) {  
      try {
        this.element.next().focus();
      } catch(err) {
        // No next field 
        return false;
      }
    }else{
	alert(e.keyCode);
    }
  }
});

Event.addBehavior({'.day_field, .month_field, .hour_field, .minute_field, second_field' : AutoJumpToNextOnLength(2)});
Event.addBehavior({'.year_field' : AutoJumpToNextOnLength(4)});
