const orgChart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: "",
        Kyle: "",
        Andra: "",
      },
      Zhao: {
        Richie: "",
        Sofia: "",
        Jen: "",
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: "",
        Michelle: "",
        Josh: "",
      },
      Swain: {
        Blanch: "",
        Tom: "",
        Joe: "",
      },
    },
    Sandberg: {
      Goler: {
        Eddie: "",
        Julie: "",
        Annie: "",
      },
      Hernandex: {
        Rowi: "",
        Inga: "",
        Morgan: "",
      },
      Moissinac: {
        Amy: "",
        Chuck: "",
        Vinni: "",
      },
      Kelley: {
        Eric: "",
        Ana: "",
        Wes: "",
      },
    },
  },
};

const organizationChart = (orgChart) => {
  let results = [];

  //general case
  //   loop through this highest level in orgChart
  for (let member in orgChart) {
    //   add to results array
    results.push(member);
    // if there are deeper levels
    if (typeof orgChart[member] === "object") {
      // recursive call on the nested object
      let subKeys = organizationChart(orgChart[member]);
      //   merge the new result with the result array with a big space.
      //   results = results.concat(
      //     subKeys.map((subKey) => {
      //       return "    " + subKey;
      //     })
      //   );
      //   Same but with spread operator
      let newResults = subKeys.map((sk) => "     " + sk);
      results = [...results, ...newResults];
    }
  }
  // base case has been reached when all the keys have been traversed above
  return results;
};

console.log(organizationChart(orgChart).join("\n"));
