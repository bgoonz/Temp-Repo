var moment = require("../../moment");

/**************************************************
      Serbian
     *************************************************/

exports["lang:rs"] = {
  setUp: function (cb) {
    moment.lang("rs");
    cb();
  },

  tearDown: function (cb) {
    moment.lang("en");
    cb();
  },

  parse: function (test) {
    test.expect(96);

    var tests =
        "januar jan._februar feb._mart mar._april apr._maj maj._jun jun._jul jul._avgust avg._septembar sep._oktobar okt._novembar nov._decembar dec.".split(
          "_"
        ),
      i;
    function equalTest(input, mmm, i) {
      test.equal(
        moment(input, mmm).month(),
        i,
        input + " should be month " + (i + 1)
      );
    }
    for (i = 0; i < 12; i++) {
      tests[i] = tests[i].split(" ");
      equalTest(tests[i][0], "MMM", i);
      equalTest(tests[i][1], "MMM", i);
      equalTest(tests[i][0], "MMMM", i);
      equalTest(tests[i][1], "MMMM", i);
      equalTest(tests[i][0].toLocaleLowerCase(), "MMMM", i);
      equalTest(tests[i][1].toLocaleLowerCase(), "MMMM", i);
      equalTest(tests[i][0].toLocaleUpperCase(), "MMMM", i);
      equalTest(tests[i][1].toLocaleUpperCase(), "MMMM", i);
    }
    test.done();
  },

  format: function (test) {
    test.expect(22);
    var a = [
        [
          "dddd, Do MMMM YYYY, h:mm:ss a",
          "nedelja, 14. februar 2010, 3:25:50 pm",
        ],
        ["ddd, hA", "ned., 3PM"],
        ["M Mo MM MMMM MMM", "2 2. 02 februar feb."],
        ["YYYY YY", "2010 10"],
        ["D Do DD", "14 14. 14"],
        ["d do dddd ddd dd", "0 0. nedelja ned. ne"],
        ["DDD DDDo DDDD", "45 45. 045"],
        ["w wo ww", "7 7. 07"],
        ["h hh", "3 03"],
        ["H HH", "15 15"],
        ["m mm", "25 25"],
        ["s ss", "50 50"],
        ["a A", "pm PM"],
        ["[the] DDDo [day of the year]", "the 45. day of the year"],
        ["L", "14. 02. 2010"],
        ["LL", "14. februar 2010"],
        ["LLL", "14. februar 2010 15:25"],
        ["LLLL", "nedelja, 14. februar 2010 15:25"],
        ["l", "14. 2. 2010"],
        ["ll", "14. feb. 2010"],
        ["lll", "14. feb. 2010 15:25"],
        ["llll", "ned., 14. feb. 2010 15:25"],
      ],
      b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
      i;
    for (i = 0; i < a.length; i++) {
      test.equal(b.format(a[i][0]), a[i][1], a[i][0] + " ---> " + a[i][1]);
    }
    test.done();
  },

  "format ordinal": function (test) {
    test.expect(31);
    test.equal(moment([2011, 0, 1]).format("DDDo"), "1.", "1.");
    test.equal(moment([2011, 0, 2]).format("DDDo"), "2.", "2.");
    test.equal(moment([2011, 0, 3]).format("DDDo"), "3.", "3.");
    test.equal(moment([2011, 0, 4]).format("DDDo"), "4.", "4.");
    test.equal(moment([2011, 0, 5]).format("DDDo"), "5.", "5.");
    test.equal(moment([2011, 0, 6]).format("DDDo"), "6.", "6.");
    test.equal(moment([2011, 0, 7]).format("DDDo"), "7.", "7.");
    test.equal(moment([2011, 0, 8]).format("DDDo"), "8.", "8.");
    test.equal(moment([2011, 0, 9]).format("DDDo"), "9.", "9.");
    test.equal(moment([2011, 0, 10]).format("DDDo"), "10.", "10.");

    test.equal(moment([2011, 0, 11]).format("DDDo"), "11.", "11.");
    test.equal(moment([2011, 0, 12]).format("DDDo"), "12.", "12.");
    test.equal(moment([2011, 0, 13]).format("DDDo"), "13.", "13.");
    test.equal(moment([2011, 0, 14]).format("DDDo"), "14.", "14.");
    test.equal(moment([2011, 0, 15]).format("DDDo"), "15.", "15.");
    test.equal(moment([2011, 0, 16]).format("DDDo"), "16.", "16.");
    test.equal(moment([2011, 0, 17]).format("DDDo"), "17.", "17.");
    test.equal(moment([2011, 0, 18]).format("DDDo"), "18.", "18.");
    test.equal(moment([2011, 0, 19]).format("DDDo"), "19.", "19.");
    test.equal(moment([2011, 0, 20]).format("DDDo"), "20.", "20.");

    test.equal(moment([2011, 0, 21]).format("DDDo"), "21.", "21.");
    test.equal(moment([2011, 0, 22]).format("DDDo"), "22.", "22.");
    test.equal(moment([2011, 0, 23]).format("DDDo"), "23.", "23.");
    test.equal(moment([2011, 0, 24]).format("DDDo"), "24.", "24.");
    test.equal(moment([2011, 0, 25]).format("DDDo"), "25.", "25.");
    test.equal(moment([2011, 0, 26]).format("DDDo"), "26.", "26.");
    test.equal(moment([2011, 0, 27]).format("DDDo"), "27.", "27.");
    test.equal(moment([2011, 0, 28]).format("DDDo"), "28.", "28.");
    test.equal(moment([2011, 0, 29]).format("DDDo"), "29.", "29.");
    test.equal(moment([2011, 0, 30]).format("DDDo"), "30.", "30.");

    test.equal(moment([2011, 0, 31]).format("DDDo"), "31.", "31.");
    test.done();
  },

  "format month": function (test) {
    test.expect(12);
    var expected =
        "januar jan._februar feb._mart mar._april apr._maj maj._jun jun._jul jul._avgust avg._septembar sep._oktobar okt._novembar nov._decembar dec.".split(
          "_"
        ),
      i;
    for (i = 0; i < expected.length; i++) {
      test.equal(
        moment([2011, i, 1]).format("MMMM MMM"),
        expected[i],
        expected[i]
      );
    }
    test.done();
  },

  "format week": function (test) {
    test.expect(7);
    var expected =
        "nedelja ned. ne_ponedeljak pon. po_utorak uto. ut_sreda sre. sr_četvrtak čet. če_petak pet. pe_subota sub. su".split(
          "_"
        ),
      i;
    for (i = 0; i < expected.length; i++) {
      test.equal(
        moment([2011, 0, 2 + i]).format("dddd ddd dd"),
        expected[i],
        expected[i]
      );
    }
    test.done();
  },

  from: function (test) {
    test.expect(30);
    var start = moment([2007, 1, 28]);
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 44 }), true),
      "par sekundi",
      "44 seconds = a few seconds"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 45 }), true),
      "jedna minuta",
      "45 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 89 }), true),
      "jedna minuta",
      "89 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 90 }), true),
      "2 minute",
      "90 seconds = 2 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 44 }), true),
      "44 minuta",
      "44 minutes = 44 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 45 }), true),
      "jedan sat",
      "45 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 89 }), true),
      "jedan sat",
      "89 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 90 }), true),
      "2 sata",
      "90 minutes = 2 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 5 }), true),
      "5 sati",
      "5 hours = 5 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 21 }), true),
      "21 sati",
      "21 hours = 21 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 22 }), true),
      "dan",
      "22 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 35 }), true),
      "dan",
      "35 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 36 }), true),
      "2 dana",
      "36 hours = 2 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 1 }), true),
      "dan",
      "1 day = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 5 }), true),
      "5 dana",
      "5 days = 5 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 25 }), true),
      "25 dana",
      "25 days = 25 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 26 }), true),
      "mesec",
      "26 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 30 }), true),
      "mesec",
      "30 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 45 }), true),
      "mesec",
      "45 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 46 }), true),
      "2 meseca",
      "46 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 74 }), true),
      "2 meseca",
      "75 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 76 }), true),
      "3 meseca",
      "76 days = 3 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 1 }), true),
      "mesec",
      "1 month = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 5 }), true),
      "5 meseci",
      "5 months = 5 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 344 }), true),
      "11 meseci",
      "344 days = 11 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 345 }), true),
      "godinu",
      "345 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 547 }), true),
      "godinu",
      "547 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 548 }), true),
      "2 godine",
      "548 days = 2 years"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 1 }), true),
      "godinu",
      "1 year = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 5 }), true),
      "5 godina",
      "5 years = 5 years"
    );
    test.done();
  },

  suffix: function (test) {
    test.expect(2);
    test.equal(moment(30000).from(0), "za par sekundi", "prefix");
    test.equal(moment(0).from(30000), "pre par sekundi", "prefix");
    test.done();
  },

  "now from now": function (test) {
    test.expect(1);
    test.equal(
      moment().fromNow(),
      "pre par sekundi",
      "now from now should display as in the past"
    );
    test.done();
  },

  fromNow: function (test) {
    test.expect(2);
    test.equal(
      moment().add({ s: 30 }).fromNow(),
      "za par sekundi",
      "in a few seconds"
    );
    test.equal(moment().add({ d: 5 }).fromNow(), "za 5 dana", "in 5 days");
    test.done();
  },

  "calendar day": function (test) {
    test.expect(6);

    var a = moment().hours(2).minutes(0).seconds(0);

    test.equal(moment(a).calendar(), "danas u 2:00", "today at the same time");
    test.equal(
      moment(a).add({ m: 25 }).calendar(),
      "danas u 2:25",
      "Now plus 25 min"
    );
    test.equal(
      moment(a).add({ h: 1 }).calendar(),
      "danas u 3:00",
      "Now plus 1 hour"
    );
    test.equal(
      moment(a).add({ d: 1 }).calendar(),
      "sutra u 2:00",
      "tomorrow at the same time"
    );
    test.equal(
      moment(a).subtract({ h: 1 }).calendar(),
      "danas u 1:00",
      "Now minus 1 hour"
    );
    test.equal(
      moment(a).subtract({ d: 1 }).calendar(),
      "juče u 2:00",
      "yesterday at the same time"
    );
    test.done();
  },

  "calendar next week": function (test) {
    test.expect(15);

    var i, m;

    function makeFormat(d) {
      switch (d.day()) {
        case 0:
          return "[u] [nedelju] [u] LT";
        case 3:
          return "[u] [sredu] [u] LT";
        case 6:
          return "[u] [subotu] [u] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[u] dddd [u] LT";
      }
    }

    for (i = 2; i < 7; i++) {
      m = moment().add({ d: i });
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today + " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today + " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today + " + i + " days end of day"
      );
    }
    test.done();
  },

  "calendar last week": function (test) {
    test.expect(15);

    var i, m;

    function makeFormat(d) {
      switch (d.day()) {
        case 0:
        case 3:
          return "[prošlu] dddd [u] LT";
        case 6:
          return "[prošle] [subote] [u] LT";
        case 1:
        case 2:
        case 4:
        case 5:
          return "[prošli] dddd [u] LT";
      }
    }

    for (i = 2; i < 7; i++) {
      m = moment().subtract({ d: i });
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today - " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today - " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format(makeFormat(m)),
        "Today - " + i + " days end of day"
      );
    }
    test.done();
  },

  "calendar all else": function (test) {
    test.expect(4);

    var weeksAgo = moment().subtract({ w: 1 }),
      weeksFromNow = moment().add({ w: 1 });

    test.equal(weeksAgo.calendar(), weeksAgo.format("L"), "1 week ago");
    test.equal(weeksFromNow.calendar(), weeksFromNow.format("L"), "in 1 week");

    weeksAgo = moment().subtract({ w: 2 });
    weeksFromNow = moment().add({ w: 2 });

    test.equal(weeksAgo.calendar(), weeksAgo.format("L"), "2 weeks ago");
    test.equal(weeksFromNow.calendar(), weeksFromNow.format("L"), "in 2 weeks");

    test.done();
  },

  // Monday is the first day of the week.
  // The week that contains Jan 1st is the first week of the year.

  "weeks year starting sunday": function (test) {
    test.expect(5);

    test.equal(
      moment([2011, 11, 26]).week(),
      1,
      "Dec 26 2011 should be week 1"
    );
    test.equal(moment([2012, 0, 1]).week(), 1, "Jan  1 2012 should be week 1");
    test.equal(moment([2012, 0, 2]).week(), 2, "Jan  2 2012 should be week 2");
    test.equal(moment([2012, 0, 8]).week(), 2, "Jan  8 2012 should be week 2");
    test.equal(moment([2012, 0, 9]).week(), 3, "Jan  9 2012 should be week 3");

    test.done();
  },

  "weeks year starting monday": function (test) {
    test.expect(5);

    test.equal(moment([2007, 0, 1]).week(), 1, "Jan  1 2007 should be week 1");
    test.equal(moment([2007, 0, 7]).week(), 1, "Jan  7 2007 should be week 1");
    test.equal(moment([2007, 0, 8]).week(), 2, "Jan  8 2007 should be week 2");
    test.equal(moment([2007, 0, 14]).week(), 2, "Jan 14 2007 should be week 2");
    test.equal(moment([2007, 0, 15]).week(), 3, "Jan 15 2007 should be week 3");

    test.done();
  },

  "weeks year starting tuesday": function (test) {
    test.expect(6);

    test.equal(
      moment([2007, 11, 31]).week(),
      1,
      "Dec 31 2007 should be week 1"
    );
    test.equal(moment([2008, 0, 1]).week(), 1, "Jan  1 2008 should be week 1");
    test.equal(moment([2008, 0, 6]).week(), 1, "Jan  6 2008 should be week 1");
    test.equal(moment([2008, 0, 7]).week(), 2, "Jan  7 2008 should be week 2");
    test.equal(moment([2008, 0, 13]).week(), 2, "Jan 13 2008 should be week 2");
    test.equal(moment([2008, 0, 14]).week(), 3, "Jan 14 2008 should be week 3");

    test.done();
  },

  "weeks year starting wednesday": function (test) {
    test.expect(6);

    test.equal(
      moment([2002, 11, 30]).week(),
      1,
      "Dec 30 2002 should be week 1"
    );
    test.equal(moment([2003, 0, 1]).week(), 1, "Jan  1 2003 should be week 1");
    test.equal(moment([2003, 0, 5]).week(), 1, "Jan  5 2003 should be week 1");
    test.equal(moment([2003, 0, 6]).week(), 2, "Jan  6 2003 should be week 2");
    test.equal(moment([2003, 0, 12]).week(), 2, "Jan 12 2003 should be week 2");
    test.equal(moment([2003, 0, 13]).week(), 3, "Jan 13 2003 should be week 3");

    test.done();
  },

  "weeks year starting thursday": function (test) {
    test.expect(6);

    test.equal(
      moment([2008, 11, 29]).week(),
      1,
      "Dec 29 2008 should be week 1"
    );
    test.equal(moment([2009, 0, 1]).week(), 1, "Jan  1 2009 should be week 1");
    test.equal(moment([2009, 0, 4]).week(), 1, "Jan  4 2009 should be week 1");
    test.equal(moment([2009, 0, 5]).week(), 2, "Jan  5 2009 should be week 2");
    test.equal(moment([2009, 0, 11]).week(), 2, "Jan 11 2009 should be week 2");
    test.equal(moment([2009, 0, 12]).week(), 3, "Jan 12 2009 should be week 3");

    test.done();
  },

  "weeks year starting friday": function (test) {
    test.expect(6);

    test.equal(
      moment([2009, 11, 28]).week(),
      1,
      "Dec 28 2009 should be week 1"
    );
    test.equal(moment([2010, 0, 1]).week(), 1, "Jan  1 2010 should be week 1");
    test.equal(moment([2010, 0, 3]).week(), 1, "Jan  3 2010 should be week 1");
    test.equal(moment([2010, 0, 4]).week(), 2, "Jan  4 2010 should be week 2");
    test.equal(moment([2010, 0, 10]).week(), 2, "Jan 10 2010 should be week 2");
    test.equal(moment([2010, 0, 11]).week(), 3, "Jan 11 2010 should be week 3");

    test.done();
  },

  "weeks year starting saturday": function (test) {
    test.expect(6);

    test.equal(
      moment([2010, 11, 27]).week(),
      1,
      "Dec 27 2010 should be week 1"
    );
    test.equal(moment([2011, 0, 1]).week(), 1, "Jan  1 2011 should be week 1");
    test.equal(moment([2011, 0, 2]).week(), 1, "Jan  2 2011 should be week 1");
    test.equal(moment([2011, 0, 3]).week(), 2, "Jan  3 2011 should be week 2");
    test.equal(moment([2011, 0, 9]).week(), 2, "Jan  9 2011 should be week 2");
    test.equal(moment([2011, 0, 10]).week(), 3, "Jan 10 2011 should be week 3");

    test.done();
  },

  "weeks year starting sunday formatted": function (test) {
    test.expect(5);

    test.equal(
      moment([2011, 11, 26]).format("w ww wo"),
      "1 01 1.",
      "Dec 26 2011 should be week 1"
    );
    test.equal(
      moment([2012, 0, 1]).format("w ww wo"),
      "1 01 1.",
      "Jan  1 2012 should be week 1"
    );
    test.equal(
      moment([2012, 0, 2]).format("w ww wo"),
      "2 02 2.",
      "Jan  2 2012 should be week 2"
    );
    test.equal(
      moment([2012, 0, 8]).format("w ww wo"),
      "2 02 2.",
      "Jan  8 2012 should be week 2"
    );
    test.equal(
      moment([2012, 0, 9]).format("w ww wo"),
      "3 03 3.",
      "Jan  9 2012 should be week 3"
    );

    test.done();
  },

  "returns the name of the language": function (test) {
    if (typeof module !== "undefined" && module.exports) {
      test.equal(require("../../lang/rs"), "rs", "module should export rs");
    }

    test.done();
  },
};
