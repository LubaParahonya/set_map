import {Team, Character} from './set';
import {ErrorRepository} from './map';

test('add one hero', ()=>{
    const testHero = new Team();
    const man = new Character('мечник');
    const result = testHero.members.add(man).size;
    expect(result).toBe(1);
})

test('add many heros', ()=>{
    const heroSet = new Team();
    heroSet.addAll('мечник', 'воин', 'рыцарь', 'стрелочник', 'воин', 'рыцарь')
    const result = heroSet.members.size
    expect(result).toBe(4);
})

test('get array', ()=>{
    const heroSet = new Team();
    heroSet.addAll('мечник', 'воин', 'рыцарь', 'стрелочник', 'воин', 'рыцарь');
    const result = heroSet.toArray();
    expect(result).toEqual(['мечник', 'воин', 'рыцарь', 'стрелочник']);
})

test('test error', ()=>{
    const errClass = new ErrorRepository();
    const getErr = errClass.setErr(404, 'Not Found');
    const result = errClass.translate(404);
    expect(result).toBe('Not Found')  
    
})

