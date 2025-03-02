﻿var moment = require("../../moment");

/**************************************************
    Hebrew
**************************************************/

exports["lang:he"] = {
  setUp: function (cb) {
    moment.lang("he");
    cb();
  },

  tearDown: function (cb) {
    moment.lang("en");
    cb();
  },

  parse: function (test) {
    test.expect(96);

    var tests =
        "ינואר ינו׳_פברואר פבר׳_מרץ מרץ_אפריל אפר׳_מאי מאי_יוני יוני_יולי יולי_אוגוסט אוג׳_ספטמבר ספט׳_אוקטובר אוק׳_נובמבר נוב׳_דצמבר דצמ׳".split(
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
        ["dddd, MMMM Do YYYY, h:mm:ss a", "ראשון, פברואר 14 2010, 3:25:50 pm"],
        ["ddd, hA", "א׳, 3PM"],
        ["M Mo MM MMMM MMM", "2 2 02 פברואר פבר׳"],
        ["YYYY YY", "2010 10"],
        ["D Do DD", "14 14 14"],
        ["d do dddd ddd dd", "0 0 ראשון א׳ א"],
        ["DDD DDDo DDDD", "45 45 045"],
        ["w wo ww", "8 8 08"],
        ["h hh", "3 03"],
        ["H HH", "15 15"],
        ["m mm", "25 25"],
        ["s ss", "50 50"],
        ["a A", "pm PM"],
        ["[the] DDDo [day of the year]", "the 45 day of the year"],
        ["L", "14/02/2010"],
        ["LL", "14 בפברואר 2010"],
        ["LLL", "14 בפברואר 2010 15:25"],
        ["LLLL", "ראשון, 14 בפברואר 2010 15:25"],
        ["l", "14/2/2010"],
        ["ll", "14 פבר׳ 2010"],
        ["lll", "14 פבר׳ 2010 15:25"],
        ["llll", "א׳, 14 פבר׳ 2010 15:25"],
      ],
      b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
      i;
    for (i = 0; i < a.length; i++) {
      test.equal(b.format(a[i][0]), a[i][1], a[i][0] + " ---> " + a[i][1]);
    }
    test.done();
  },

  "format month": function (test) {
    test.expect(12);
    var expected =
        "ינואר ינו׳_פברואר פבר׳_מרץ מרץ_אפריל אפר׳_מאי מאי_יוני יוני_יולי יולי_אוגוסט אוג׳_ספטמבר ספט׳_אוקטובר אוק׳_נובמבר נוב׳_דצמבר דצמ׳".split(
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
        "ראשון א׳ א|שני ב׳ ב|שלישי ג׳ ג|רביעי ד׳ ד|חמישי ה׳ ה|שישי ו׳ ו|שבת ש׳ ש".split(
          "|"
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
      "מספר שניות",
      "44 seconds = a few seconds"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 45 }), true),
      "דקה",
      "45 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 89 }), true),
      "דקה",
      "89 seconds = a minute"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ s: 90 }), true),
      "2 דקות",
      "90 seconds = 2 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 44 }), true),
      "44 דקות",
      "44 minutes = 44 minutes"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 45 }), true),
      "שעה",
      "45 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 89 }), true),
      "שעה",
      "89 minutes = an hour"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ m: 90 }), true),
      "שעתיים",
      "90 minutes = 2 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 5 }), true),
      "5 שעות",
      "5 hours = 5 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 21 }), true),
      "21 שעות",
      "21 hours = 21 hours"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 22 }), true),
      "יום",
      "22 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 35 }), true),
      "יום",
      "35 hours = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ h: 36 }), true),
      "יומיים",
      "36 hours = 2 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 1 }), true),
      "יום",
      "1 day = a day"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 5 }), true),
      "5 ימים",
      "5 days = 5 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 25 }), true),
      "25 ימים",
      "25 days = 25 days"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 26 }), true),
      "חודש",
      "26 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 30 }), true),
      "חודש",
      "30 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 45 }), true),
      "חודש",
      "45 days = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 46 }), true),
      "חודשיים",
      "46 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 74 }), true),
      "חודשיים",
      "75 days = 2 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 76 }), true),
      "3 חודשים",
      "76 days = 3 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 1 }), true),
      "חודש",
      "1 month = a month"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ M: 5 }), true),
      "5 חודשים",
      "5 months = 5 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 344 }), true),
      "11 חודשים",
      "344 days = 11 months"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 345 }), true),
      "שנה",
      "345 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 547 }), true),
      "שנה",
      "547 days = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ d: 548 }), true),
      "שנתיים",
      "548 days = 2 years"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 1 }), true),
      "שנה",
      "1 year = a year"
    );
    test.equal(
      start.from(moment([2007, 1, 28]).add({ y: 5 }), true),
      "5 שנים",
      "5 years = 5 years"
    );
    test.done();
  },

  suffix: function (test) {
    test.expect(2);
    test.equal(moment(30000).from(0), "בעוד מספר שניות", "prefix");
    test.equal(moment(0).from(30000), "לפני מספר שניות", "suffix");
    test.done();
  },

  "now from now": function (test) {
    test.expect(1);
    test.equal(
      moment().fromNow(),
      "לפני מספר שניות",
      "now from now should display as in the past"
    );
    test.done();
  },

  fromNow: function (test) {
    test.expect(2);
    test.equal(
      moment().add({ s: 30 }).fromNow(),
      "בעוד מספר שניות",
      "in a few seconds"
    );
    test.equal(moment().add({ d: 5 }).fromNow(), "בעוד 5 ימים", "in 5 days");
    test.done();
  },

  "calendar day": function (test) {
    test.expect(6);

    var a = moment().hours(2).minutes(0).seconds(0);

    test.equal(moment(a).calendar(), "היום ב־02:00", "today at the same time");
    test.equal(
      moment(a).add({ m: 25 }).calendar(),
      "היום ב־02:25",
      "Now plus 25 min"
    );
    test.equal(
      moment(a).add({ h: 1 }).calendar(),
      "היום ב־03:00",
      "Now plus 1 hour"
    );
    test.equal(
      moment(a).add({ d: 1 }).calendar(),
      "מחר ב־02:00",
      "tomorrow at the same time"
    );
    test.equal(
      moment(a).subtract({ h: 1 }).calendar(),
      "היום ב־01:00",
      "Now minus 1 hour"
    );
    test.equal(
      moment(a).subtract({ d: 1 }).calendar(),
      "אתמול ב־02:00",
      "yesterday at the same time"
    );
    test.done();
  },

  "calendar next week": function (test) {
    test.expect(15);

    var i, m;
    for (i = 2; i < 7; i++) {
      m = moment().add({ d: i });
      test.equal(
        m.calendar(),
        m.format("dddd [בשעה] LT"),
        "Today + " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format("dddd [בשעה] LT"),
        "Today + " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format("dddd [בשעה] LT"),
        "Today + " + i + " days end of day"
      );
    }
    test.done();
  },

  "calendar last week": function (test) {
    test.expect(15);

    var i, m;
    for (i = 2; i < 7; i++) {
      m = moment().subtract({ d: i });
      test.equal(
        m.calendar(),
        m.format("[ביום] dddd [האחרון בשעה] LT"),
        "Today - " + i + " days current time"
      );
      m.hours(0).minutes(0).seconds(0).milliseconds(0);
      test.equal(
        m.calendar(),
        m.format("[ביום] dddd [האחרון בשעה] LT"),
        "Today - " + i + " days beginning of day"
      );
      m.hours(23).minutes(59).seconds(59).milliseconds(999);
      test.equal(
        m.calendar(),
        m.format("[ביום] dddd [האחרון בשעה] LT"),
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

  // Sunday is the first day of the week.
  // The week that contains Jan 1st is the first week of the year.

  "weeks year starting sunday": function (test) {
    test.expect(5);

    test.equal(moment([2012, 0, 1]).week(), 1, "Jan  1 2012 should be week 1");
    test.equal(moment([2012, 0, 7]).week(), 1, "Jan  7 2012 should be week 1");
    test.equal(moment([2012, 0, 8]).week(), 2, "Jan  8 2012 should be week 2");
    test.equal(moment([2012, 0, 14]).week(), 2, "Jan 14 2012 should be week 2");
    test.equal(moment([2012, 0, 15]).week(), 3, "Jan 15 2012 should be week 3");

    test.done();
  },

  "weeks year starting monday": function (test) {
    test.expect(6);

    test.equal(
      moment([2006, 11, 31]).week(),
      1,
      "Dec 31 2006 should be week 1"
    );
    test.equal(moment([2007, 0, 1]).week(), 1, "Jan  1 2007 should be week 1");
    test.equal(moment([2007, 0, 6]).week(), 1, "Jan  6 2007 should be week 1");
    test.equal(moment([2007, 0, 7]).week(), 2, "Jan  7 2007 should be week 2");
    test.equal(moment([2007, 0, 13]).week(), 2, "Jan 13 2007 should be week 2");
    test.equal(moment([2007, 0, 14]).week(), 3, "Jan 14 2007 should be week 3");

    test.done();
  },

  "weeks year starting tuesday": function (test) {
    test.expect(6);

    test.equal(
      moment([2007, 11, 29]).week(),
      52,
      "Dec 29 2007 should be week 52"
    );
    test.equal(moment([2008, 0, 1]).week(), 1, "Jan  1 2008 should be week 1");
    test.equal(moment([2008, 0, 5]).week(), 1, "Jan  5 2008 should be week 1");
    test.equal(moment([2008, 0, 6]).week(), 2, "Jan  6 2008 should be week 2");
    test.equal(moment([2008, 0, 12]).week(), 2, "Jan 12 2008 should be week 2");
    test.equal(moment([2008, 0, 13]).week(), 3, "Jan 13 2008 should be week 3");

    test.done();
  },

  "weeks year starting wednesday": function (test) {
    test.expect(6);

    test.equal(
      moment([2002, 11, 29]).week(),
      1,
      "Dec 29 2002 should be week 1"
    );
    test.equal(moment([2003, 0, 1]).week(), 1, "Jan  1 2003 should be week 1");
    test.equal(moment([2003, 0, 4]).week(), 1, "Jan  4 2003 should be week 1");
    test.equal(moment([2003, 0, 5]).week(), 2, "Jan  5 2003 should be week 2");
    test.equal(moment([2003, 0, 11]).week(), 2, "Jan 11 2003 should be week 2");
    test.equal(moment([2003, 0, 12]).week(), 3, "Jan 12 2003 should be week 3");

    test.done();
  },

  "weeks year starting thursday": function (test) {
    test.expect(6);

    test.equal(
      moment([2008, 11, 28]).week(),
      1,
      "Dec 28 2008 should be week 1"
    );
    test.equal(moment([2009, 0, 1]).week(), 1, "Jan  1 2009 should be week 1");
    test.equal(moment([2009, 0, 3]).week(), 1, "Jan  3 2009 should be week 1");
    test.equal(moment([2009, 0, 4]).week(), 2, "Jan  4 2009 should be week 2");
    test.equal(moment([2009, 0, 10]).week(), 2, "Jan 10 2009 should be week 2");
    test.equal(moment([2009, 0, 11]).week(), 3, "Jan 11 2009 should be week 3");

    test.done();
  },

  "weeks year starting friday": function (test) {
    test.expect(6);

    test.equal(
      moment([2009, 11, 27]).week(),
      1,
      "Dec 27 2009 should be week 1"
    );
    test.equal(moment([2010, 0, 1]).week(), 1, "Jan  1 2010 should be week 1");
    test.equal(moment([2010, 0, 2]).week(), 1, "Jan  2 2010 should be week 1");
    test.equal(moment([2010, 0, 3]).week(), 2, "Jan  3 2010 should be week 2");
    test.equal(moment([2010, 0, 9]).week(), 2, "Jan  9 2010 should be week 2");
    test.equal(moment([2010, 0, 10]).week(), 3, "Jan 10 2010 should be week 3");

    test.done();
  },

  "weeks year starting saturday": function (test) {
    test.expect(5);

    test.equal(
      moment([2010, 11, 26]).week(),
      1,
      "Dec 26 2010 should be week 1"
    );
    test.equal(moment([2011, 0, 1]).week(), 1, "Jan  1 2011 should be week 1");
    test.equal(moment([2011, 0, 2]).week(), 2, "Jan  2 2011 should be week 2");
    test.equal(moment([2011, 0, 8]).week(), 2, "Jan  8 2011 should be week 2");
    test.equal(moment([2011, 0, 9]).week(), 3, "Jan  9 2011 should be week 3");

    test.done();
  },

  "weeks year starting sunday format": function (test) {
    test.expect(5);

    test.equal(
      moment([2012, 0, 1]).format("w ww wo"),
      "1 01 1",
      "Jan  1 2012 should be week 1"
    );
    test.equal(
      moment([2012, 0, 7]).format("w ww wo"),
      "1 01 1",
      "Jan  7 2012 should be week 1"
    );
    test.equal(
      moment([2012, 0, 8]).format("w ww wo"),
      "2 02 2",
      "Jan  8 2012 should be week 2"
    );
    test.equal(
      moment([2012, 0, 14]).format("w ww wo"),
      "2 02 2",
      "Jan 14 2012 should be week 2"
    );
    test.equal(
      moment([2012, 0, 15]).format("w ww wo"),
      "3 03 3",
      "Jan 15 2012 should be week 3"
    );

    test.done();
  },

  "returns the name of the language": function (test) {
    if (typeof module !== "undefined" && module.exports) {
      test.equal(require("../../lang/he"), "he", "module should export he");
    }

    test.done();
  },
};
