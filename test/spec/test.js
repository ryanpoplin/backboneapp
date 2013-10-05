'use strict';

(function () {
    
    describe('[ Backbone.js Application ]', function () {
        
        describe('Backbone.js dependency checker:', function () {
            
            it('Should confirm jQuery is avaliable.', function () {		
				expect($() !== undefined).to.equal(true);
            });
            
            it('Should confirm Lodash is avaliable.', function () {
            	expect(_ !== undefined).to.equal(true);
            });

            it('Should confirm Backbone is avaliable.', function () {
            	expect(Backbone !== undefined).to.equal(true);
            });
        
        });
    
    });

})();