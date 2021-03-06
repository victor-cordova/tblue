import { keypress } from '../stdin';

describe('keypress', () => {
    xit('calls stdin setRawMode on and off', async () => {
        jest.spyOn(process.stdin, 'setRawMode').mockImplementation(() => {});
        jest.spyOn(process.stdin, 'once').mockImplementation((_, callback) => callback());
        await keypress();
        expect(process.stdin.setRawMode).toHaveBeenCalledTimes(2);
    });
});
