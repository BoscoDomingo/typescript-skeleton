import main from '../src/app';

describe('main', () => {
  it('should print "Example Node App!"', () => {
    console.log = jest.fn();

    main();

    expect(console.log).toHaveBeenCalledWith('Example Node app!');
  });
});
