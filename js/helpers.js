console.info("Init ℹ️ helpers.js");

/**************************************************************************************************
 * Helpers.js
 * 
 * Contains various helper functions to check stuff not available in javascript by default.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

const isOdd = function(x) { return x & 1; };
const isEven  = function(x) { return !( x & 1 ); };