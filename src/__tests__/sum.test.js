import { sum } from "../components/Sum"


test("test", ()=>{
    const res = sum(3, 4);
    expect(res).toBe(7);
})