describe("JavaScript syntax", function () {

    /// REST PARAMETER
    it("Rest Parameter", function () {
        let work = function (name, ...numbers) {
            let result = 0;
            numbers.forEach(function (n) {
                result += n;
            });
            return result;
        }
        // pass multiple values
        let result = work("Joe", 1, 3, 4, 5);
        expect(result).toBe(13);
    })

    /// SPREAD PARAMETER
    it("Spread Parameter", function () {
        // spread parameter ...
        let work = function (x, y, z) {
            return x + y + z;
        }
        let result = work(...[1, 3, 4]);
        expect(result).toBe(8);
    })

    /// TEMPLATE
    it("Template", function () {
        // spread parameter ...
        let work = function (x, y) {
            return `${x} + ${y} = ${x + y}`
        }
        let result = work(2, 4);
        expect(result).toBe("2 + 4 = 6");
    })
})