
import test from "node:test";

import assert from "node:assert/strict";

import {
    isValidEmail,
    validateContactForm
} from "../script.js";


/* TEST CASE 1 */

test("Valid email should return true", () => {

    assert.equal(
        isValidEmail("vinod@gmail.com"),
        true
    );

});


/* TEST CASE 2 */

test("Invalid email should return false", () => {

    assert.equal(
        isValidEmail("vinodgmail.com"),
        false
    );

});


/* TEST CASE 3 */

test("Valid contact form should return true", () => {

    assert.equal(
        validateContactForm(
            "Vinod",
            "vinod@gmail.com",
            "Hello, I am interested in your project."
        ),
        true
    );

});


/* TEST CASE 4 */

test("Empty name should return false", () => {

    assert.equal(
        validateContactForm(
            "",
            "vinod@gmail.com",
            "Hello, I am interested in your project."
        ),
        false
    );

});


/* TEST CASE 5 */

test("Invalid email should return false", () => {

    assert.equal(
        validateContactForm(
            "Vinod",
            "vinodgmail.com",
            "Hello, I am interested in your project."
        ),
        false
    );

});


/* TEST CASE 6 */

test("Short message should return false", () => {

    assert.equal(
        validateContactForm(
            "Vinod",
            "vinod@gmail.com",
            "Hi"
        ),
        false
    );

});
