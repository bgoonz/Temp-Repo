var moment = require("../../moment");

/**************************************************
      Welsh
     *************************************************/

exports["lang:cy"] = {
  setUp: function (cb) {
    moment.lang("cy");
    cb();
  },

  tearDown: function (cb) {
    moment.lang("en");
    cb();
  },

  parse: function (test) {
    test.expect(96);

    var tests =
        "Ionawr Ion_Chwefror Chwe_Mawrth Maw_Ebrill Ebr_Mai Mai_Mehefin Meh_Gorffennaf Gor_Awst Aws_Medi Med_Hydref Hyd_Tachwedd Tach_Rhagfyr Rhag".split(
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
          "dddd, MMMM Do YYYY, h:mm:ss a",
          "Dydd Sul, Chwefror 14eg 2010, 3:25:50 pm",
        ],
        ["ddd, hA", "Sul, 3PM"],
        ["M Mo MM MMMM MMM", "2 2il 02 Chwefror Chwe"],
        ["YYYY YY", "2010 10"],
        ["D Do DD", "14 14eg 14"],
        ["d do dddd ddd dd", "0 0 Dydd Sul Sul Su"],
        ["DDD DDDo DDDD", "45 45ain 045"],
        ["w wo ww", "6 6ed 06"],
        ["h hh", "3 03"],
        ["H HH", "15 15"],
        ["m mm", "25 25"],
        ["s ss", "50 50"],
        ["a A", "pm PM"],
        ["[the] DDDo [day of the year]", "the 45ain day of the year"],
        ["L", "14/02/2010"],
        ["LL", "14 Chwefror 2010"],
        ["LLL", "14 Chwefror 2010 15:25"],
        ["LLLL", "Dydd Sul, 14 Chwefror 2010 15:25"],
        ["l", "14/2/2010"],
        ["ll", "14 Chwe 2010"],
        ["lll", "14 Chwe 2010 15:25"],
        ["llll", "Sul, 14 Chwe 2010 15:25"],
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

    test.equal(moment([2011, 0, 1]).format("DDDo"), "1af", "1af");
    test.equal(moment([2011, 0, 2]).format("DDDo"), "2il", "2il");
    test.equal(moment([2011, 0, 3]).format("DDDo"), "3ydd", "3ydd");
    test.equal(moment([2011, 0, 4]).format("DDDo"), "4ydd", "4ydd");
    test.equal(moment([2011, 0, 5]).format("DDDo"), "5ed", "5ed");
    test.equal(moment([2011, 0, 6]).format("DDDo"), "6ed", "6ed");
    test.equal(moment([2011, 0, 7]).format("DDDo"), "7ed", "7ed");
    test.equal(moment([2011, 0, 8]).format("DDDo"), "8fed", "8fed");
    test.equal(moment([2011, 0, 9]).format("DDDo"), "9fed", "9fed");
    test.equal(moment([2011, 0, 10]).format("DDDo"), "10fed", "10fed");

    test.equal(moment([2011, 0, 11]).format("DDDo"), "11eg", "11eg");
    test.equal(moment([2011, 0, 12]).format("DDDo"), "12fed", "12fed");
    test.equal(moment([2011, 0, 13]).format("DDDo"), "13eg", "13eg");
    test.equal(moment([2011, 0, 14]).format("DDDo"), "14eg", "14eg");
    test.equal(moment([2011, 0, 15]).format("DDDo"), "15fed", "15fed");
    test.equal(moment([2011, 0, 16]).format("DDDo"), "16eg", "16eg");
    test.equal(moment([2011, 0, 17]).format("DDDo"), "17eg", "17eg");
    test.equal(moment([2011, 0, 18]).format("DDDo"), "18fed", "18fed");
    test.equal(moment([2011, 0, 19]).format("DDDo"), "19eg", "19eg");
    test.equal(moment([2011, 0, 20]).format("DDDo"), "20fed", "20fed");

    test.equal(moment([2011, 0, 21]).format("DDDo"), "21ain", "21ain");
    test.equal(moment([2011, 0, 22]).format("DDDo"), "22ain", "22ain");
    test.equal(moment([2011, 0, 23]).format("DDDo"), "23ain", "23ain");
    test.equal(moment([2011, 0, 24]).format("DDDo"), "24ain", "24ain");
    test.equal(moment([2011, 0, 25]).format("DDDo"), "25ain", "25ain");
    test.equal(moment([2011, 0, 26]).format("DDDo"), "26ain", "26ain");
    test.equal(moment([2011, 0, 27]).format("DDDo"), "27ain", "27ain");
    test.equal(moment([2011, 0, 28]).format("DDDo"), "28ain", "28ain");
    test.equal(moment([2011, 0, 29]).format("DDDo"), "29ain", "29ain");
    test.equal(moment([2011, 0, 30]).format("DDDo"), "30ain", "30ain");

    test.equal(moment([2011, 0, 31]).format("DDDo"), "31ain", "31ain");
    test.done();
  },

  "format month": function (test) {
    test.expect(12);

    var expected =
        "Ionawr Ion_Chwefror Chwe_Mawrth Maw_Ebrill Ebr_Mai Mai_Mehefin Meh_Gorffennaf Gor_Awst Aws_Medi Med_Hydref Hyd_Tachwedd Tach_Rhagfyr Rhag".split(
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
        "Dydd Sul Sul Su_Dydd Llun Llun Ll_Dydd Mawrth Maw Ma_Dydd Mercher Mer Me_Dydd Iau Iau Ia_Dydd Gwener Gwe Gw_Dydd Sadwrn Sad Sa".split(
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
      "ychydig eiliadau",
      "44 seconds = a few seconds"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 45 }), true),
      "munud",
      "45 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 89 }), true),
      "munud",
      "89 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 90 }), true),
      "2 munud",
      "90 seconds = 2 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 44 }), true),
      "44 munud",
      "44 minutes = 44 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 45 }), true),
      "awr",
      "45 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 89 }), true),
      "awr",
      "89 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 90 }), true),
      "2 awr",
      "90 minutes = 2 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 5 }), true),
      "5 awr",
      "5 hours = 5 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 21 }), true),
      "21 awr",
      "21 hours = 21 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 22 }), true),
      "diwrnod",
      "22 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 35 }), true),
      "diwrnod",
      "35 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 36 }), true),
      "2 diwrnod",
      "36 hours = 2 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 1 }), true),
      "diwrnod",
      "1 day = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 5 }), true),
      "5 diwrnod",
      "5 days = 5 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 25 }), true),
      "25 diwrnod",
      "25 days = 25 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 26 }), true),
      "mis",
      "26 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 30 }), true),
      "mis",
      "30 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 45 }), true),
      "mis",
      "45 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 46 }), true),
      "2 mis",
      "46 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 74 }), true),
      "2 mis",
      "75 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 76 }), true),
      "3 mis",
      "76 days = 3 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 1 }), true),
      "mis",
      "1 month = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 5 }), true),
      "5 mis",
      "5 months = 5 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 344 }), true),
      "11 mis",
      "344 days = 11 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 345 }), true),
      "blwyddyn",
      "345 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 547 }), true),
      "blwyddyn",
      "547 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 548 }), true),
      "2 flynedd",
      "548 days = 2 years"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 1 }), true),
      "blwyddyn",
      "1 year = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 5 }), true),
      "5 flynedd",
      "5 years = 5 years"
    );
    test.done();
  },

  suffix: function (test) {
    test.expect(2);

    test.equal(moment(30000).from(0), "mewn ychydig eiliadau", "prefix");
    test.equal(moment(0).from(30000), "ychydig eiliadau yn àl", "suffix");
    test.done();
  },

  fromNow: function (test) {
    test.expect(2);

    test.equal(
      moment().add({ s: 30 }).fromNow(),
      "mewn ychydig eiliadau",
      "in a few seconds"
    );
    test.equal(moment().add({ d: 5 }).fromNow(), "mewn 5 diwrnod", "in 5 days");
    test.done();
  },

  "same day": function (test) {
    test.expect(6);

    var a = moment().hours(2).minutes(0).seconds(0);

    test.equal(
      moment(a).calendar(),
      "Heddiw am 02:00",
      "today at the same time"
    );
    test.equal(
      moment(a).add({ m: 25 }).calendar(),
      "Heddiw am 02:25",
      "Now plus 25 min"
    );
    test.equal(
      moment(a).add({ h: 1 }).calendar(),
      "Heddiw am 03:00",
      "Now plus 1 hour"
    );
    test.equal(
      moment(a).add({ d: 1 }).calendar(),
      "Yfory am 02:00",
      "tomorrow at the same time"
    );
    test.equal(
      moment(a).subtract({ h: 1 }).calendar(),
      "Heddiw am 01:00",
      "Now minus 1 hour"
    );
    test.equal(
      moment(a).subtract({ d: 1 }).calendar(),
      "Ddoe am 02:00",
      "yesterday at the same time"
    );
    test.done();
  },

  "same next week": function (test) {
    test.expect(15);

    var i, m;

    for (i = 2; i < 7; i++) {
      m = moment().add({ d: i });
      test.equal(
        m.calendar(),
        m.format("dddd [am] LT"),
        "Today + " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format("dddd [am] LT"),
        "Today + " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format("dddd [am] LT"),
        "Today + " + i + " days end of day"
      );
    }
    test.done();
  },

  "same last week": function (test) {
    test.expect(15);

    var i, m;

    for (i = 2; i < 7; i++) {
      m = moment().subtract({ d: i });
      test.equal(
        m.calendar(),
        m.format("dddd [diwethaf am] LT"),
        "Today - " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format("dddd [diwethaf am] LT"),
        "Today - " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format("dddd [diwethaf am] LT"),
        "Today - " + i + " days end of day"
      );
    }
    test.done();
  },

  "same all else": function (test) {
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
  // The week that contains Jan 4th is the first week of the year.

  "weeks year starting sunday": function (test) {
    test.expect(5);

    test.equal(
      moment([2012, 0, 1]).week(),
      52,
      "Jan  1 2012 should be week 52"
    );
    test.equal(moment([2012, 0, 2]).week(), 1, "Jan  2 2012 should be week 1");
    test.equal(moment([2012, 0, 8]).week(), 1, "Jan  8 2012 should be week 1");
    test.equal(moment([2012, 0, 9]).week(), 2, "Jan  9 2012 should be week 2");
    test.equal(moment([2012, 0, 15]).week(), 2, "Jan 15 2012 should be week 2");

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
    test.equal(moment([2009, 0, 13]).week(), 3, "Jan 12 2009 should be week 3");

    test.done();
  },

  "weeks year starting friday": function (test) {
    test.expect(6);

    test.equal(
      moment([2009, 11, 28]).week(),
      53,
      "Dec 28 2009 should be week 53"
    );
    test.equal(
      moment([2010, 0, 1]).week(),
      53,
      "Jan  1 2010 should be week 53"
    );
    test.equal(
      moment([2010, 0, 3]).week(),
      53,
      "Jan  3 2010 should be week 53"
    );
    test.equal(moment([2010, 0, 4]).week(), 1, "Jan  4 2010 should be week 1");
    test.equal(moment([2010, 0, 10]).week(), 1, "Jan 10 2010 should be week 1");
    test.equal(moment([2010, 0, 11]).week(), 2, "Jan 11 2010 should be week 2");

    test.done();
  },

  "weeks year starting saturday": function (test) {
    test.expect(6);

    test.equal(
      moment([2010, 11, 27]).week(),
      52,
      "Dec 27 2010 should be week 52"
    );
    test.equal(
      moment([2011, 0, 1]).week(),
      52,
      "Jan  1 2011 should be week 52"
    );
    test.equal(
      moment([2011, 0, 2]).week(),
      52,
      "Jan  2 2011 should be week 52"
    );
    test.equal(moment([2011, 0, 3]).week(), 1, "Jan  3 2011 should be week 1");
    test.equal(moment([2011, 0, 9]).week(), 1, "Jan  9 2011 should be week 1");
    test.equal(moment([2011, 0, 10]).week(), 2, "Jan 10 2011 should be week 2");

    test.done();
  },

  "weeks year starting sunday formatted": function (test) {
    test.expect(5);

    test.equal(
      moment([2012, 0, 1]).format("w ww wo"),
      "52 52 52ain",
      "Jan  1 2012 should be week 52"
    );
    test.equal(
      moment([2012, 0, 2]).format("w ww wo"),
      "1 01 1af",
      "Jan  2 2012 should be week 1"
    );
    test.equal(
      moment([2012, 0, 8]).format("w ww wo"),
      "1 01 1af",
      "Jan  8 2012 should be week 1"
    );
    test.equal(
      moment([2012, 0, 9]).format("w ww wo"),
      "2 02 2il",
      "Jan  9 2012 should be week 2"
    );
    test.equal(
      moment([2012, 0, 15]).format("w ww wo"),
      "2 02 2il",
      "Jan 15 2012 should be week 2"
    );

    test.done();
  },

  "returns the name of the language": function (test) {
    if (typeof module !== "undefined" && module.exports) {
      test.equal(require("../../lang/cy"), "cy", "module should export cy");
    }

    test.done();
  },
};
