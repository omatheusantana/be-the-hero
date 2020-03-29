const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generation Unique ID', ()=> {
    it('should generate an unique ID', ()=> {
        expect(generateUniqueId()).toHaveLength(8);
    })
});