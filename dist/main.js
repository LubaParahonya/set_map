(() => {
  class e {
    constructor() { this.members = new Set(); }

    add(e) { this.members.add(e); }

    addAll(...e) { for (const t of e) this.members.add(t); }

    toArray() { return Array.from(this.members); }
  } class t {constructor(e) { this.name = e; }} class r {
    constructor() { this.error = new Map(); }

    setErr(e, t) { return this.error.set(e, t); }

    translate(e) { return this.error.has(e) ? this.error.get(e) : 'Unknown error'; }
  }test('add one hero', (() => {
    const r = new e(); const s = new t('мечник'); const
      o = r.members.add(s).size; expect(o).toBe(1);
  })), test('add many heros', (() => { const t = new e(); t.addAll('мечник', 'воин', 'рыцарь', 'стрелочник', 'воин', 'рыцарь'); const r = t.members.size; expect(r).toBe(4); })), test('get array', (() => { const t = new e(); t.addAll('мечник', 'воин', 'рыцарь', 'стрелочник', 'воин', 'рыцарь'); const r = t.toArray(); expect(r).toEqual(['мечник', 'воин', 'рыцарь', 'стрелочник']); })), test('test error', (() => {
    const e = new r(); const
      t = (e.setErr(404, 'Not Found'), e.translate(404)); expect(t).toBe('Not Found');
  }));
})();
