/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    return {
        toBe: function(target) {
            if (val !== target) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(target) {
            if (val === target) {
                throw new Error("Not Equal");
            }
            return true;
        }
    };
};


 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
