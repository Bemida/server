function unitsCalc(w, h, d, base, numOfDoors, sections) {
  h = h - 8;
  d = d - 0.5;
  const doorWidth = w / numOfDoors; // doorWidth = הרוחב שדלת תופסת מכלל הארון, כולל ה0.3 שמורידים לה מהצדדים
  const units = {};
  const hightOfDrawer = 5; // ?

  const unitsList = [
    // "-key-/-type-/-thick-"
    "back/back/0.5",
    "extern_sides_and_internal_partitions/struc/1.65",
    "doors/front/1.7",
    "shelves/struc/1.65",
    "tzokel/struc/1.65",
    "legs/null/null",
    "handles/null/null",
    "drawers/drawer/1.6",
    "drawer_front/front/1.7",
    "hangingRod/null/null",
  ];
  unitsList.forEach((u) => {
    const arr = u.split("/");
    units[arr[0]] = {
      type: arr[1],
      thick: typeof arr[2] === "number" ? Number(arr[2]) : arr[2],
      sizes: [],
    };
  });

  // functions:

  const calc = (unitName, s1, s2, a) => {
    units[unitName].sizes.push({
      s: `${s1} x ${s2}`,
      amount: a,
    });
  };

  const doorsOfCulomn = (i) => {
    if (numOfDoors === 1) {
      return 1;
    } else if (numOfDoors % 2 === 0) {
      return 2;
    } else {
      if (i !== sections.length - 1) {
        return 2;
      }
      return 1;
    }
  };

  // חישובים פר ארון:

  calc("handles", null, null, numOfDoors);
  calc("extern_sides_and_internal_partitions", h, d, sections.length * 2);

  const keyBase = base ? "tzokel" : "legs";
  if (base) {
    calc(keyBase, 8, w, 2);
    calc(keyBase, 8, d - 3.3, 2);
  } else {
    calc(keyBase, null, null, sections.length * 4);
  }

  // חישובים פר עמודה:

  if (numOfDoors % 2 === 0) {
    let numOfShelves = 0,
      numOfDrawers = 0,
      hangingRod = 0,
      widthCulomn = doorWidth * 2;

    sections.forEach((section) => {
      numOfShelves += section.shelves + 2;
      numOfDrawers += section.drawers;
      hangingRod += section.hangingRod;

      const doorHight = h - hightOfDrawer * section.drawers;
      calc('doors', doorHight-0.3, doorWidth-0.3, 2);
    });

    calc('back', h, widthCulomn, sections.length);
    calc('shelves', d, widthCulomn - 3.3, numOfShelves);
    if (numOfDrawers) {
      calc('drawers', parseInt(d/5) - 2.4, widthCulomn-10.8, numOfDrawers); // Math.floor(d/5)*5 - 2.4
      calc('drawers', 19.9, widthCulomn-12, numOfDrawers);
      calc('drawer_front', 21.5, widthCulomn-0.3, numOfDrawers); // 21.5 -> פחות 0.3? כרגע לא מורידה..
    }
    if (hangingRod) calc('hangingRod', widthCulomn - 3.3, null, hangingRod);

  } else {
    sections.forEach((section, i) => {
      const numOfShelves = section.shelves,
        numOfDrawers = section.drawers,
        hangingRod = section.hangingRod,
        doorsOfThisSection = doorsOfCulomn(i),
        widthCulomn = doorWidth * doorsOfThisSection;

      calc('back', h, widthCulomn, 1);
      calc('shelves', d, widthCulomn - 3.3, numOfShelves + 2);
      calc(
        'doors',
        h - hightOfDrawer * numOfDrawers - 0.3,
        doorWidth - 0.3,
        doorsOfThisSection
      );
      if (numOfDrawers) {
        calc('drawers', parseInt(d/5) - 2.4, widthCulomn-10.8, numOfDrawers);
        calc('drawers', 19.9, widthCulomn-12, numOfDrawers);
        calc('drawer_front', 21.5, widthCulomn-0.3, numOfDrawers);
      }
      if (hangingRod) calc('hangingRod', widthCulomn - 3.3, null, 1);
    });
  }

  // return units
  console.log(units);
}

// ### init toExample:

unitsCalc(185, 220, 60, false, 4, [
  {
    shelves: 1,
    hangingRod: true,
    drawers: 0,
  },
  {
    shelves: 3,
    hangingRod: false,
    drawers: 2,
  },
]);

// module.exports = { unitsCalc };
