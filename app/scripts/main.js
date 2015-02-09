var data = {
  bands: [

    {band: 'Umphreys Mcgee', location: 'Chicago, IL'},
    {band: 'Phish', location: 'Burlington, VT' },
    {band: 'Moe', location: 'Utica, NY'},
    {band: 'The Heavy Pets', location: 'Fort Lauderdale, FL'},
    {band: 'The Black Crowes', location: 'Marietta, GA'},
    {band: 'TAUK', location: 'Oyster Bay, NY'},
    {band: 'Moon Taxi', location: 'Memphis, TN'},
    {band: 'Dumpstaphunk', location: 'New Orleans, LA'},
    {band: 'My Morning Jacket', location: 'Louisville, KY'}

    ]

};

var source = $('#entry-template').html();
var template = Handlebars.compile(source);
$('.bands').html(template(data));
