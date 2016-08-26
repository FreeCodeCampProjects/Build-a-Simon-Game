/* ( X ) Dynamically create, populate and append "game board" table elements:
****************************************************************************/

createGameboard = (function() {
  let btn, footer, keys, r1c1, r1c2, r2c1, r2c2, table, trRow1, trRow2;
  keys = [['green', 'r1c1'], ['red', 'r1c2'], ['yellow', 'r2c1'], ['blue', 'r2c2']];
  grid = {
    create: function() {
      table = document.createElement('table');
      table.className = 'game-table';
    },
    populate: function() {
      for (let i = 0; i < keys.length/2; i++) {
        let row = table.insertRow();
        row.id = 'r' + (i + 1);
          for (let j = 0; j < keys.length/2; j++) {
            let cell = row.insertCell();
            cell.id = 'r' + (i + 1) + 'c' + (j + 1);
          }
        }
    },
    append: function() { elemContainer.appendChild(table); }
  };

	/* ( X ) Dynamically create, populate and append colour keys for our game board:
 *********************************************************************************/

  colourKeys = {
    Construct: function(o) {
      btn = document.createElement('input');
      btn.id = o.id;
      btn.type = 'button';
      btn.className = 'key' + ' ' + o.id;
      document.getElementById(o.appendTo).appendChild(btn);
    },
    add: function() {
      for (let i = 0; i < keys.length; i++) {
        colourKeys.Construct({
          id: keys[i][0],
          appendTo: keys[i][1]
        });
      }
    }
  };

  /* ( X ) Dynamically create, populate and append a footer:
 	**********************************************************/
  
  footer = {
    create: function() {
      let footer = document.createElement('footer');
      footer.id = 'footer';
      footer.className = 'footer';
      document.getElementById('container').appendChild(footer);
    },
    populate: function() {
      let footerText = 'made by john for <a href="http://www.freecodecamp.com">freecodecamp</a>';
      document.getElementById('footer').innerHTML = footerText;
    }
  };
  
  grid.create();
  grid.populate();
  grid.append();
  colourKeys.add();
  footer.create();
  footer.populate();
});