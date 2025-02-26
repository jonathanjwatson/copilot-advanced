const assert = require('assert');
const daysUntilChristmas = require('./error-detection');

describe('daysUntilChristmas', function() {
    it('should return 0 if today is Christmas', function() {
        const originalDate = Date;
        global.Date = class extends Date {
            constructor() {
                super();
                return new originalDate(2023, 11, 25); // Mocking Christmas day
            }
        };
        assert.strictEqual(daysUntilChristmas(), 0);
        global.Date = originalDate; // Restore original Date object
    });

    it('should return 364 if today is December 26th', function() {
        const originalDate = Date;
        global.Date = class extends Date {
            constructor() {
                super();
                return new originalDate(2023, 11, 26); // Mocking December 26th
            }
        };
        assert.strictEqual(daysUntilChristmas(), 364);
        global.Date = originalDate; // Restore original Date object
    });

    it('should return the correct number of days until Christmas', function() {
        const originalDate = Date;
        global.Date = class extends Date {
            constructor() {
                super();
                return new originalDate(2023, 0, 1); // Mocking January 1st
            }
        };
        assert.strictEqual(daysUntilChristmas(), 358);
        global.Date = originalDate; // Restore original Date object
    });

    it('should handle leap years correctly', function() {
        const originalDate = Date;
        global.Date = class extends Date {
            constructor() {
                super();
                return new originalDate(2024, 0, 1); // Mocking January 1st of a leap year
            }
        };
        assert.strictEqual(daysUntilChristmas(), 359);
        global.Date = originalDate; // Restore original Date object
    });
});