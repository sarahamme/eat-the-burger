var orm = require('./orm.js');

var connection = require('./connection.js');

orm.selectAll('burgers', function (data){
    console.log('orm.selectAll testing...');

    console.log('---The Burger Menu---');

    for(var i = 0; i < data.length; i++) {
        console.log('Burger ID = ' + data[i].id);
        console.log('Burger Name = ' + data[i].burger_name);
        console.log('Available = ' + data[i].devoured);

        console.log('+++++++++++++++++++++++++++++++++++++++');
    }
});

orm.insertOne('burgers',
                ['burgers_name', 'devoured'],
                ['Sucess Story Mushroom Double-Stack Burger', false],
                function (data) {
        console.log('\n\norm.insertOne test ... \n\n');

        console.log('Inserted new row with ID = ' + data.insertID + '\n\n');
    });

orm.updatedOne('burgers', {devoured: true}, 'id = 7', function (data){
    console.log('\n\norm.updatedOne test...\n\n');

    console.log('Result: ' + data.message);
});

connection.end();