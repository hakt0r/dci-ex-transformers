let template;

const obj = {
    Apple:     { price: 123, change: -4 },
    IBM:       { price: 432, change: 3  },
    Microsoft: { price: 213, change: 23 }
}

// 1. Traverse the Object and ...

const highestPrice = Object
.entries( obj )
.reduce( ( last, [key,{price}] )=> Math.max( last, price ) , -Infinity );
//                                 last > price ? last : price

// ... RENDER the highest Price value

template = Handlebars.compile(`
<h2>1.1. Highest Price</h2>
<div class="box">
    {{highestPrice}}
</div>`);

$('body').append( template({highestPrice}) );

// 2. RENDER all keys as a String

template = Handlebars.compile(`
<h2>1.2. All Keys</h2>
<div class="box">
    <ul>
    {{#each obj}}
        <li>
            {{@key}}:
            <ul>
                {{#each this}}
                    <li>{{@key}}: {{this}}</li>
                {{/each}}
            </ul>
        </li>
    {{/each}}
    <ul>
</div>`);

$('body').append( template({obj}) );

// 3. RENDER a TABLE

template = Handlebars.compile(`
<h2>1.3. Render a Table</h2>
<div class="box">
    <table>
    <tr><th>Company</th><th>Price</th><th>Change</th></tr>
    {{#each obj}}
    <tr>
        <td>
            {{@key}}
        </td>
        {{#each this}}
            <td>{{this}}</td>
        {{/each}}
        </td>
    </tr>
    {{/each}}
    </table>
</div>`);

$('body').append( template({obj}) );

const apiReply = [
    { t: 21, h: 29, r:0  },
    { t: 25, h: 44, r:36 },
    { t: 22, h: 48, r:58 },
    { t: 26, h: 87, r:73 },
    { t: 24, h: 67, r:23 },
    { t: 16, h: 80, r:43 },
    { t: 15, h: 83, r:85 },
    { t: 5,  h: 7,  r:51 },
    { t: 18, h: 67, r:22 },
    { t: 7,  h: 87, r:78 },
    { t: 32, h: 17, r:50 },
    { t: 18, h: 41, r:61 },
    { t: 2,  h: 68, r:44 },
];

// 1. RENDER the average temperature, humidity, rain probability

const length  = apiReply.length; //                     vvv
const tempSum = apiReply.reduce( ( sum, {t} )=> sum + t , 0) / length; 
const humiSum = apiReply.reduce( ( sum, {h} )=> sum + h , 0) / length; 
const rainSum = apiReply.reduce( ( sum, {r} )=> sum + r , 0) / length; 

template = Handlebars.compile(`
<h2>2.1. Highest Values</h2>
<div class="box"><b>Average Temperature:</b>          {{tempSum}}</div>
<div class="box"><b>Average Humidity:</b>             {{humiSum}}</div>
<div class="box"><b>Average Rainfall-Probability:</b> {{rainSum}}</div>`);
$('body').append( template({tempSum,humiSum,rainSum}));

// 2. RENDER the HIGH and LOW temperatures

const hiTemp = apiReply.reduce( ( last, {t} )=> Math.max( last, t ) , -Infinity );
const loTemp = apiReply.reduce( ( last, {t} )=> Math.min( last, t ) ,  Infinity );

template = Handlebars.compile(`
<h2>2.2. Highest, Lowest Temperature</h2>
<div class="box"><b>Highest Temperature:</b> {{hiTemp}}</div>
<div class="box"><b>Lowest Temperature:</b> {{loTemp}}</div>`);
$('body').append( template({hiTemp,loTemp}));

// 3. RENDER a TABLE

template = Handlebars.compile(`
<h2>2.3. Render a Table</h2>
<div class="box">
    <table>
    <tr>
        <th>Temperature</th>
        <th>Humidity</th>
        <th>Rainfall-Probability</th>
    </tr>
    {{#each apiReply}}
    <tr>
        {{#each this}}
            <td>{{this}}</td>
        {{/each}}
    </tr>
    {{/each}}
    </table>
</div>`);
$('body').append( template({apiReply}) );

const ridiculousResponse = [
    { t: [ 1,  3,      123,  435,  54345, 2     ] },
    { t: [ 36, 24114,  564,  3892, 3880,  5544  ] },
    { t: [ 81, 1016,   2467, 2779, 2599,  33090 ] },
    { t: [ 10, 6,      1083, 3278, 505,   32021 ] },
    { t: [ 37, 35836,  81,   1558, 122,   35594 ] },
    { t: [ 1,  3,      123,  435,  54345, 2     ] },
    { t: [ 36, 24114,  564,  3892, 3880,  5544  ] },
    { t: [ 81, 1016,   2467, 2779, 2599,  33090 ] },
    { t: [ 10, 6,      1083, 3278, 505,   32564021 ] },
    { t: [ 37, 35836,  81,   1558, 122,   35594 ] },
    { t: [ 83, 13418,  1501, 771,  2643,  35322 ] }
];

const allNumbers = ridiculousResponse.map( o => o.t ).flat();

// 1. RENDER the average for all Numbers

const sumNumbers    = allNumbers.reduce( (sum,value) => sum + value);
const averageNumber = sumNumbers / allNumbers.length;

template = Handlebars.compile(`
<h2>3.1. Average Number</h2>
<div class="box">
    {{averageNumber}}
</div>`);
$('body').append( template({averageNumber}) );

// 2. RENDER the HIGHEST and LOWEST numbers overall

const highestNumber = allNumbers.reduce( ( hi, value ) => Math.max(hi,value) );
const lowestNumber  = Math.min(...allNumbers);
//                    Math.min.apply(null, allNumbers);

template = Handlebars.compile(`
<h2>3.2. Highest, Lowest Number</h2>
<div class="box"><b>Lowest Number:</b>  {{lowestNumber}}</div>
<div class="box"><b>Highest Number:</b> {{highestNumber}}</div>`);
$('body').append( template({highestNumber,lowestNumber}) );

// 3. RENDER the HIGHEST and LOWEST numbers for each COLUMN into a TABLE

const columns = [];

const columnsCount = ridiculousResponse.reduce(
    (cols,{t})=> Math.max(cols,t.length)
, 0 );

for ( let i = 0; i < columnsCount; i++ ) columns[i] = [];

ridiculousResponse.forEach( ({t})=> {
    for ( let i = 0; i < columnsCount; i++ ) columns[i].push(t[i]);
});

const highestValues = columns.map( col => Math.max(...col) );
const lowestValues  = columns.map( col => Math.min(...col) );

template = Handlebars.compile(`
<h2>2.3. Render a Table</h2>
<div class="box">
    <table>

    <tr>
        <th></th>
    {{#each highestValues}}
        <th>{{@key}}</th>
    {{/each}}
    </tr>

    <tr>
        <th>Highest</th>
    {{#each highestValues}}
        <td>{{this}}</td>
    {{/each}}
    </tr>

    <tr>
        <th>Lowest</th>
    {{#each lowestValues}}
        <td>{{this}}</td>
    {{/each}}
    </tr>

    </table>
</div>`);
$('body').append( template({highestValues,lowestValues}) );

// BONUS: RENDER nice looking boxes
// check