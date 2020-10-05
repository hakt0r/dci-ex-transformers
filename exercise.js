
const obj = {
    Apple:     { price: 123, change: -4 },
    IBM:       { price: 432, change: 3  },
    Microsoft: { price: 213, change: 23 }
}

// 1. Traverse the Object and RENDER the highest Price value
// 2. RENDER all keys as a String
// 3. RENDER a TABLE

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
// 2. RENDER the HIGH and LOW temperatures
// 3. RENDER a TABLE

const ridiculousResponse = [
    { t: [ 1,  3,      123,  435,  54345, 2     ] },
    { t: [ 36, 24114,  564,  3892, 3880,  5544  ] },
    { t: [ 81, 1016,   2467, 2779, 2599,  33090 ] },
    { t: [ 10, 6,      1083, 3278, 505,   32021 ] },
    { t: [ 37, 35836,  81,   1558, 122,   35594 ] },
    { t: [ 1,  3,      123,  435,  54345, 2     ] },
    { t: [ 36, 24114,  564,  3892, 3880,  5544  ] },
    { t: [ 81, 1016,   2467, 2779, 2599,  33090 ] },
    { t: [ 10, 6,      1083, 3278, 505,   32021 ] },
    { t: [ 37, 35836,  81,   1558, 122,   35594 ] },
    { t: [ 83, 13418,  1501, 771,  2643,  35322 ] }
];

// 1. RENDER the average for all Numbers
// 2. RENDER the HIGHEST and LOWEST numbers overall
// 3. RENDER the HIGHEST and LOWEST numbers for each COLUMN into a TABLE
// BONUS: RENDER nice looking boxes
