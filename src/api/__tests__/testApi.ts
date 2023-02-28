import * as API from '../index';

const unmockedFetch = global.fetch;

describe('API', () => {
  beforeEach(() => {
    global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve({json: {res: 'ok'}}),
      }) as any;
  });
  
  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it('should execute getData correctly', async () => {

    const json = await API.getData('https://anyurl.com');
    
    expect(json).toMatchObject({json: {res: 'ok'}});
  });

  it('should execute getData correctly without params', async () => {

    const json = await API.getData();
    
    expect(json).toMatchObject({json: {res: 'ok'}});
  });

  it('should execute getTeamOverview correctly', async () => {
    const json = await API.getTeamOverview('https://anyurl.com');
    
    expect(json).toMatchObject({json: {res: 'ok'}});
  });

  it('should execute getUserData correctly', async () => {
    const json = await API.getUserData('https://anyurl.com');
    
    expect(json).toMatchObject({json: {res: 'ok'}});
  });
});