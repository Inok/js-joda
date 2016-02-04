/**
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import {expect, assert} from 'chai';

export function assertEquals(expected, actual, message){
    if(expected != null || actual != null) {
        if(expected != null) {
            if(typeof expected.equals === 'function'){
                expect(expected.equals(actual), message).to.be.true;
            } else {
                expect(expected, message).to.eql(actual);
            }
        } else {
            expect(actual).to.be.null;
        }
    }
}

export function fail(message){
    assert(false, message);
}

export function isCoverageTestRunner(){
    return (process.env.COVERAGE != null) && process.env.COVERAGE !== 0 && process.env.COVERAGE !== '';
}


