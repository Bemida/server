// const calc = {
//   back: () => {}, // model : "" , w , h , d ,
// };

function calcUnitsSize(h, w, t, a , s1, s2) {
  console.log(h,w,t,a,s1,s2);
  return {
    back: {
      heigth: h,
      width: w,
      t: t, // עומק / רוחב?
      amount: a,
    },
  };
}

const calc1 = {
  back: { type: back, calcFun: () => c(190, 233) },
  ceiling: { type: structure, calcFun: () => {} },
  floor: { type: structure, calcFun: () => {} },
  extern_sides_and_internal_partitions: { type: structure, calcFun: () => {} },
  doors: { type: front, calcFun: () => {} },
  shelves: { type: structure, calcFun: () => {} },
  zokel: { type: structure, calcFun: () => {} },
  legs: { type: null, calcFun: () => {} },
  handles: { type: null, calcFun: () => {} },
  drawers: { type: structure, calcFun: () => {} },
  drawer_front: { type: front, calcFun: () => {} },
  suspension: { type: null, calcFun: () => {} },
};


module.exports = {calcUnitsSize}