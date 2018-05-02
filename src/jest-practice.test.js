
beforeAll(() => {
	console.log = jest.fn()
})

describe('<Login />', () => {
	function forEach(items, callback) {
	  for (let index = 0; index < items.length; index++) {
	    callback(items[index]);
	  }
	}

	beforeEach(() => {
    	console.log('in beforeEach')
  	});

	afterEach(() => {
  		console.log('in afterEach')
	});	

	it.only('test 1', () => {
		console.log('in test 1')

		const mockCallback = jest.fn();
		
		mockCallback.mockReturnValueOnce(true).mockReturnValueOnce(false);

		forEach([0, 1], mockCallback);

		// mock called twiceq
		expect(mockCallback.mock.calls.length).toBe(2);
	});

	it('test 2', () => {
		console.log('in test 2')

		const myMock = jest.fn();
		console.log(myMock());
		// > undefined

		myMock
		  .mockReturnValueOnce(10)
		  .mockReturnValueOnce('x')
		  .mockReturnValue(true);

		console.log(myMock(), myMock(), myMock(), myMock());
	});

	it('test 3', () => {
		console.log('in test 3')
	});
});