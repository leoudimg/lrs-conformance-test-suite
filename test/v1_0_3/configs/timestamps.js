/**
 * Description : This is a test suite that tests an LRS endpoint based on the testing requirements document
 * found at https://github.com/adlnet/xAPI_LRS_Test/blob/master/TestingRequirements.md
 *
 * https://github.com/adlnet/xAPI_LRS_Test/blob/master/TestingRequirements.md
 *
 */
(function (module, helper) {
    "use strict";

    // defines overwriting data
    var INVALID_DATE = '01/011/2015';
    var INVALID_STRING = 'should fail';

    // configures tests
    module.exports.config = function () {
        return [
            {
            /**  XAPI-00123, Data 4.5 ISO8601 Timestamps
             * A Timestamp must conform to ISO 8601 Date format. An LRS rejects a statement with a Timestamp which doesn’t validate to ISO 8601 Extended or ISO 8601 Basic.
             */
                name: 'A TimeStamp is defined as a Date/Time formatted according to ISO 8601 (Format, Data 4.5.s1.b1, ISO8601, XAPI-00123)',
                config: [
                    {
                        name: 'statement "template" invalid string in timestamp',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {timestamp: INVALID_STRING}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'statement "template" invalid date in timestamp',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {timestamp: INVALID_DATE}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'statement "template" invalid string in stored',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {stored: INVALID_STRING}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'statement "template" invalid date in stored',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {stored: INVALID_DATE}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'substatement "template" invalid string in timestamp',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {timestamp: INVALID_STRING}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'substatement "template" invalid date in timestamp',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {timestamp: INVALID_DATE}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'substatement "template" invalid string in stored',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {stored: INVALID_STRING}
                        ],
                        expect: [400]
                    },
                    {
                        name: 'substatement "template" invalid date in stored',
                        templates: [
                            {statement: '{{statements.default}}'},
                            {stored: INVALID_DATE}
                        ],
                        expect: [400]
                    }
                ]
            }
        ];
    };
}(module, require('./../../helper.js')));
